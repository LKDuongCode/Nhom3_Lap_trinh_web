import { Outlet, useNavigate } from "react-router-dom";
import HeaderUser from "../../components/usersCpn/HeaderUser";
import FooterUser from "../../components/usersCpn/FooterUser";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/users/getUsers.service";
import { User } from "../../interface/usersType";
import { CombineType } from "../../interface/combineType";
export default function UsersHome() {
  let [checkLock, setCheckLock] = useState<boolean>(false);
  const navigate = useNavigate();
  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(fetchUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  //lấy user hiện tại-----------------------------------------------
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
        //chưa đăng nhập
      } else {
        let userFound = users.find((admin: User) => {
          return admin.email === userObj.email;
        });

        // Set lại sau khi tìm thấy
        if (userFound) {
          setCurUserLogin(userFound);
          if (!userFound.status && curUserLogin.email !== "") {
            setCheckLock(true);
          }
        }
      }
    } else {
      // không có trên local
    }
  }, [users]);
  //lấy user hiện tại-----------------------------------------------
  return (
    <>
      <HeaderUser></HeaderUser>

      {/* outlet---------------------------------- */}
      <div className="mt-10">
        <Outlet></Outlet>
      </div>
      {/* outlet---------------------------------- */}

      <FooterUser></FooterUser>
      {checkLock && (
        <div className="z-[0]">
          {/* modal delete */}

          <div
            className={`relative ${checkLock ? "z-[50]" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity ${
                checkLock
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkLock
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                  checkLock
                    ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                    : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                }`}
              >
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-amber-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          />{" "}
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Your account has been disabled
                        </h3>
                        <div className="mt-2">
                          <p className=" text-gray-500 text-sm ">
                            You may have violated our policies and terms, so
                            your account has been locked by the admin. Please
                            contact admin for support!
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
                        setCheckLock(false);
                        navigate("supports");
                      }}
                    >
                      Send feedback to admin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
