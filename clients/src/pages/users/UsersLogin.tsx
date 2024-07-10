import { Link, useLocation, useNavigate } from "react-router-dom";
import IntroduceWeb from "../../components/usersCpn/login_signUp/IntroduceWeb";
import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../interface/combineType";
import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "../../services/users/getUsers.service";
import { User } from "../../interface/usersType";
import { validateEmail } from "../../func/validateEmail";

export default function UsersLogin() {
  //nhận giá trị register truyền sang
  let location = useLocation();
  let signUpData = location.state;

  const navigate = useNavigate();
  //state quản lí alert validate------------------------------------------------
  let [checkWrongPass, setCheckWrongPass] = useState<boolean>(false);
  let [checkValidate, setCheckValidate] = useState<any>({
    empty: false,
    emailFormat: false,
  });
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  //state quản lí alert validate------------------------------------------------

  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(fetchUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  // Tạo state kiểm soát trạng thái đăng nhập người dùng
  let [currentUser, setCurrentUser] = useState<any>({
    email: "",
    password: "",
    role: false,
  });
  //hàm lấy thông tin người dùng
  const handleGetInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCurrentUser((preUser: any) => ({
      ...preUser,
      [name]: value,
    }));
  };

  // Hàm xử lý đăng nhập------------------------------------------------------------
  const handleLoginUser = () => {
    // Kiểm tra trường trống
    if (currentUser.email === "" || currentUser.password === "") {
      setCheckValidate((prev: any) => ({
        ...prev,
        empty: true,
      }));
      return;
    }

    // Kiểm tra định dạng email
    if (!validateEmail(currentUser.email)) {
      setCheckValidate((prev: any) => ({
        ...prev,
        emailFormat: true,
      }));
      return;
    }

    // Tìm người dùng
    const userFound = users.find(
      (user: User) => user.email === currentUser.email && user.role === false
    );

    if (!userFound) {
      setCheckWrongPass(true);
      return;
    }

    // Kiểm tra mật khẩu
    if (userFound.password !== currentUser.password) {
      setCheckWrongPass(true);
      return;
    }

    // Đăng nhập thành công
    localStorage.setItem("curEmailUS", JSON.stringify(currentUser.email));
    localStorage.setItem("curRoleUS", JSON.stringify(currentUser.role));
    setCheckSuccess(true);
    setTimeout(() => {
      setCheckSuccess(false);
      navigate("/");
    }, 1500);
  };
  // Hàm xử lý đăng nhập------------------------------------------------------------

  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500  flex ">
          {/* introduce */}
          <IntroduceWeb></IntroduceWeb>
          {/* introduce */}

          {/* form */}
          <div className="w-1/2 flex flex-col justify-center h-screen  px-16  ">
            <div className="w-full rounded-lg ">
              <div className="p-7 bg-[#FFFFFF] rounded-lg flex flex-col gap-6 shadow-md">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Welcome back
                </h1>

                <div className="flex gap-5 justify-center">
                  <a
                    className="flex flex-1 gap-2 border-[1px] border-[#ebebed] border-solid bg-white justify-center p-2 rounded-lg items-center hover:bg-[#eff0f1]"
                    href="#"
                  >
                    <img
                      src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                      alt=""
                      className="size-6"
                    />
                    <a
                      href="https://accounts.google.com/v3/signin/identifier?ifkv=AdF4I76HAiGjHKkRlukE5zv5_oxb3XpFVf9jBE5zFEm9D9b_WyI8tjSZKH2Q3JI7uZ7WxELEwsOF&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S252026102%3A1720517430247276&ddm=0"
                      className="text-black"
                    >
                      Login with Google
                    </a>
                  </a>
                  <a
                    className="flex flex-1 gap-2 bg-white hover:bg-[#eff0f1]  border-[1px] border-[#ebebed] border-solid justify-center p-2 rounded-lg items-center"
                    href="#"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                    </svg>
                    <a href="https://www.icloud.com/" className="text-black">
                      Login with Apple
                    </a>
                  </a>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="border-t-[#F1F2F4] border-b-transparent border-x-transparent border-[2px] border-solid  flex-1"></div>
                  <div className="w-max px-2">or</div>
                  <div className="border-t-[#F1F2F4] border-b-transparent border-x-transparent border-solid border-[2px] flex-1"></div>
                </div>
                {/* main form */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      onClick={() => {
                        setCheckWrongPass(false);
                        setCheckValidate({
                          emailFormat: false,
                          empty: false,
                        });
                      }}
                      type="email"
                      name="email"
                      onChange={handleGetInfo}
                      className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg  block w-full p-2.5 h-12 text-base"
                      placeholder="name@company.com"
                    />
                    {checkValidate.emailFormat && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Email is in wrong format
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      onClick={() => {
                        setCheckWrongPass(false);
                        setCheckValidate({
                          emailFormat: false,
                          empty: false,
                        });
                      }}
                      type="password"
                      name="password"
                      onChange={handleGetInfo}
                      placeholder="• • • • • "
                      className="bg-gray-50 border-transparent focus:border-[#bc78ff81] focus:border-2 boder-solid text-gray-900 rounded-lg block w-full p-2.5 h-12 font-extrabold text-2xl"
                    />
                    {checkWrongPass && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Email or password is incorrect !
                      </p>
                    )}
                    {checkValidate.empty && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Email or password is empty !
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
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
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    onClick={handleLoginUser}
                    className="w-full text-white bg-[#6422e0] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-[#bc78ff81] font-medium rounded-lg text-sm px-5 py-2.5 text-center border-transparent "
                  >
                    Login Now
                  </button>
                  <div className="flex justify-between">
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <Link
                        to={"/usersRegister"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </Link>
                    </p>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      You are an admin? {"  "}
                      <Link
                        to={"/adminLogin"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Log in as admin
                      </Link>
                    </p>
                  </div>
                </div>
                {/* main form */}
              </div>
            </div>
          </div>
          {/* form */}
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
    </>
  );
}