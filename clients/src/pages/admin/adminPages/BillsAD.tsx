import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBills } from "../../../services/bills/getBills.service";
import { CombineType } from "../../../interface/combineType";
import { Bill } from "../../../interface/billsType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import { useNavigate } from "react-router-dom";

export default function () {
  const dispatch = useDispatch();
  //lấy redux
  let bills = useSelector((state: CombineType) => state.bills.data);
  useEffect(() => {
    dispatch(fetchBills());
  }, []);

  const navigate = useNavigate();

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
      } else {
        let userFound = users.find((admin: User) => {
          return admin.email === userObj.email;
        });

        // Set lại sau khi tìm thấy
        if (userFound) {
          setCurUserLogin(userFound);
        }
      }
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
        Users Bills
      </h2>
      <div className="flex flex-col gap-5 mx-40">
        {bills.map((bill: Bill) => {
          return (
            <div
              className="bg-white shadow-md p-5 rounded cursor-pointer"
              onClick={() =>
                navigate("/adminHome/billInfoAdmin", { state: bill })
              }
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
    </div>
  );
}
