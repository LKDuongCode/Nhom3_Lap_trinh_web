import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CombineType } from "../../../interface/combineType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";

export default function AdminLogin() {
  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(fetchUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  // Tính toán danh sách admins dựa trên users, sử dụng useMemo để tránh tính toán lại khi users thay đổi
  let admins: User[] = useMemo(() => {
    return users.filter((user: User) => user.role === true);
  }, [users]);

  // Tạo state kiểm soát trạng thái đăng nhập người dùng
  let [currentUser, setCurrentUser] = useState<any>({
    email: "",
    password: "",
    role: true,
  });
  // lưu giá trị admin tìm được
  let admin = admins.find((user: User) => {
    return user.email === currentUser.email;
  });

  // Hàm xử lý đăng nhập------------------------------------------------------------
  const handleLoginAdmin = () => {
    //nếu tìm thấy
    if (admin) {
      // kiểm tra mật khẩu
      if (admin.password === currentUser.password) {
        localStorage.setItem("curEmail", JSON.stringify(currentUser.email));
        localStorage.setItem("curRole", JSON.stringify(currentUser.role));
        navigate("/adminHome");
      } else {
        console.log("password false");
      }
    } else {
      console.log("not found");
    }
  };
  // Hàm xử lý đăng nhập------------------------------------------------------------

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
            Duong's Shop
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
                  onChange={(e) =>
                    setCurrentUser((prevUser: any) => ({
                      ...prevUser,
                      email: e.target.value,
                    }))
                  }
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
                  onChange={(e) =>
                    setCurrentUser((prePass: any) => ({
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
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300"
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
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Our terms and conditions
                </a>
              </p>
            </div>
            {/* main form */}
          </div>
        </div>
      </div>
    </section>
  );
}
