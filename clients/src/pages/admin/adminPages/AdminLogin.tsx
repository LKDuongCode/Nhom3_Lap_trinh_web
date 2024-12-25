import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CombineType } from "../../../interface/combineType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import { validateEmail } from "../../../func/validateEmail";

export default function AdminLogin() {
  //state alert validate----------------------------------------
  let [validateForm, setValidateForm] = useState<any>({
    empty: false,
    wrongEmailOrPass: false,
  });
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);

  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(fetchUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  // Tạo state kiểm soát trạng thái đăng nhập người dùng
  let [currentAdmin, setCurrentAdmin] = useState<any>({
    email: "",
    password: "",
    role: true,
  });

  // Hàm xử lý đăng nhập------------------------------------------------------------
  const handleLoginAdmin = () => {
    //validate trống
    if (currentAdmin.email === "" || currentAdmin.password === "") {
      setValidateForm((pre: any) => ({
        ...pre,
        empty: true,
      }));
      return;
    }
    if (!validateEmail(currentAdmin.email)) {
      setValidateForm((pre: any) => ({
        ...pre,
        wrongEmailOrPass: true,
      }));
      return;
    }
    // validate tồn tại
    let userFound = users.find((user: User) => {
      return user.email === currentAdmin.email && user.role === true;
    });
    if (!userFound) {
      return;
    }

    //validate password

    if (userFound.password !== currentAdmin.password) {
      setValidateForm((pre: any) => ({
        ...pre,
        wrongEmailOrPass: true,
      }));
      return;
    }

    localStorage.setItem(
      "curAdmin",
      JSON.stringify({ email: currentAdmin.email, role: currentAdmin.role })
    );
    setCheckSuccess(true);
    setTimeout(() => {
      setCheckSuccess(false);
      navigate("/adminHome");
    }, 1500);
  };
  // Hàm xử lý đăng nhập------------------------------------------------------------

  //lấy user hiện tại-----------------------------------------------
  useEffect(() => {
    let curAdmin = localStorage.getItem("curAdmin");
    if (curAdmin) {
      let adminObj = JSON.parse(curAdmin);
      let adminFound = users.find((admin: User) => {
        return admin.email === adminObj.email;
      });
      //set lại sau khi tìm thấy
      if (adminFound) {
        setCurrentAdmin(adminFound);
      }
    }
  }, [users]);

  //lấy user hiện tại-----------------------------------------------

  const navigate = useNavigate();
  return (
    <section className="bg-[url('https://d2lwtouoc9qh9n.cloudfront.net/wp-content/uploads/2023/01/wordpress-basics-featured-image-jpg.webp')]">
      <p className="flex items-center gap-2 bg-[#01003C] absolute top-14 left-8 ">
        <svg
          className="h-10 w-10 text-indigo-500 p-1 bg-indigo-300 rounded-full hover:text-indigo-100 hover:bg-indigo-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => navigate("/")}
        >
          <line x1="19" y1="12" x2="5" y2="12" />{" "}
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="font-semibold text-lg text-white">Go Home</span>
      </p>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-5">
        <div className="flex items-center ">
          <p className="rounded-full size-20">
            <img
              className="size-[100%]"
              src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
              alt=""
            />
          </p>
          <p className="text-4xl font-semibold mt-2 text-violet-200">
            Tech Shop
          </p>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-[90%]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              ADMIN LOGIN
            </h1>
            {/* main form */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onClick={() =>
                    setValidateForm((pre: any) => ({
                      ...pre,
                      wrongEmailOrPass: false,
                      empty: false,
                    }))
                  }
                  onChange={(e) =>
                    setCurrentAdmin((prevUser: any) => ({
                      ...prevUser,
                      email: e.target.value,
                    }))
                  }
                  value={currentAdmin.email}
                  type="text"
                  name="adminID"
                  className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg  block w-full p-2.5 h-12 text-base"
                  placeholder="admin@code.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={currentAdmin.password}
                  onClick={() =>
                    setValidateForm((pre: any) => ({
                      ...pre,
                      wrongEmailOrPass: false,
                      empty: false,
                    }))
                  }
                  onChange={(e) =>
                    setCurrentAdmin((prePass: any) => ({
                      ...prePass,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="• • • • • •"
                  className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg block w-full p-2.5 h-12  font-extrabold text-2xl"
                />
                {validateForm.empty && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                    Fields cannot be empty !
                  </p>
                )}
                {validateForm.wrongEmailOrPass && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                    Email or password is wrong !
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="w-full text-white bg-[#6422e0] focus:ring-4 focus:outline-none focus:ring-[#bc78ff81] font-medium rounded-lg text-sm px-5 py-2.5 text-center border-transparent "
                onClick={handleLoginAdmin}
              >
                Go to Dashboard
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Haven't admin account?{" "}
                <Link
                  to={"/terms"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Our terms and conditions
                </Link>
              </p>
            </div>
            {/* main form */}
          </div>
        </div>
      </div>
      {/* success modal */}
      {checkSucccess && (
        <div
          className={`relative ${checkSucccess ? "z-10" : "z-[-1]"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => setCheckSuccess(false)}
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              checkSucccess
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0"
            } `}
          ></div>

          <div
            className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
              checkSucccess
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0 "
            }`}
          >
            <div
              className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0  ${
                checkSucccess
                  ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                  : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
              }`}
            >
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-96">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="sm:flex flex-col gap-4 sm:items-center">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                      <h3
                        className="text-base text-center font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Logged in successfully
                      </h3>
                      <div className="mt-2">
                        <p className=" text-gray-500 text-center">
                          Going to the home page....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
