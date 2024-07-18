import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bill, StateBillType } from "../../../interface/billsType";
import { fetchBills } from "../../../services/bills/getBills.service";
import { CombineType } from "../../../interface/combineType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import { useNavigate } from "react-router-dom";

export default function Bills() {
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //lấy redux
  let bills = useSelector((state: CombineType) => state.bills.data);
  useEffect(() => {
    dispatch(fetchBills());
  }, []);

  //lấy user hiện tại-----------------------------------------------
  //lấy mảng user
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  let [curUserLogin, setCurUserLogin] = useState<User>({
    id: 0,
    user_name: "",
    email: "",
    password: "",
    role: true,
    status: true,
    full_name: "",
    avata: "",
    phone: "",
    address: "",
    created_at: "",
    updated_at: "",
    favorites: [],
    carts: [],
  });
  useEffect(() => {
    let curUser = localStorage.getItem("curUserLogin");

    if (curUser) {
      let userObj = JSON.parse(curUser);

      // Kiểm tra nếu userObj là một đối tượng rỗng
      if (Object.keys(userObj).length === 0 && userObj.constructor === Object) {
        setCheckLogin(true);
      } else {
        let userFound = users.find((admin: User) => {
          return admin.email === userObj.email;
        });

        // Set lại sau khi tìm thấy
        if (userFound) {
          setCurUserLogin(userFound);
        }
      }
    } else {
      // Thông báo cần đăng nhập
      setCheckLogin(true);
    }
  }, [users]);

  //lấy user hiện tại-----------------------------------------------

  let [userBills, setUserBills] = useState<Bill[]>([]);
  useEffect(() => {
    if (bills.length > 0 && curUserLogin.email !== "") {
      //lọc bill của người đang đăng nhập
      let newBills = bills.filter((bill: Bill) => {
        return bill.user_id === curUserLogin.id;
      });

      if (newBills) {
        setUserBills(newBills);
      }
    }
  }, [bills]);
  return (
    <div className="my-40  ">
      <h2 className="text-3xl font-bold text-indigo-100 uppercase mb-6 ml-5 py-4 px-10 w-2/3 bg-[#1F2937] rounded-e-full">
        Your Bills
      </h2>
      <div className="flex flex-col gap-5 mx-40">
        {userBills.map((bill: Bill) => {
          return (
            <div
              className="bg-white shadow-md p-5 rounded cursor-pointer"
              onClick={() => navigate("/billInfo", { state: bill })}
              key={bill.id}
            >
              <h2>Bill id : {bill.id}</h2>
              <div className="flex justify-between font-medium mt-5">
                <p>
                  {bill.full_name} | {bill.address} - {bill.detailAddress}
                </p>
                <p>{bill.created_at}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* form check info */}
      {checkLogin && (
        <div className="z-[0]">
          {/* modal delete */}

          <div
            className={`relative ${checkLogin ? "z-[50]" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity ${
                checkLogin
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkLogin
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                  checkLogin
                    ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                    : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                }`}
              >
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Login Warning
                        </h3>
                        <div className="mt-2">
                          <p className=" text-gray-500">
                            You are not logged in. To be able to use this
                            service, you need to be granted or create an account
                            for yourself.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className=" border-none inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        setCheckLogin(false);
                        navigate("/usersLogin");
                      }}
                    >
                      Login Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
