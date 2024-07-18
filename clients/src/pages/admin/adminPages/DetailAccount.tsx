import React, { useEffect, useState } from "react";
import { CombineType } from "../../../interface/combineType";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import { useNavigate } from "react-router-dom";

export default function DetailAccount() {
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Chỉ gọi fetchUsers một lần khi component được mount
    dispatch(fetchUsers());
  }, []);
  // Lấy danh sách users về từ Redux store------------------------------------

  //lấy user hiện tại-----------------------------------------------
  const navigate = useNavigate();
  let [curAdminLogin, setCurAdminLogin] = useState<User>({
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
    let curAdmin = localStorage.getItem("curAdmin");

    if (curAdmin) {
      let adminObj = JSON.parse(curAdmin);

      // Kiểm tra nếu adminObj là một đối tượng rỗng
      if (
        Object.keys(adminObj).length === 0 &&
        adminObj.constructor === Object
      ) {
        setCheckLogin(true);
      } else {
        let adminFound = users.find((admin: User) => {
          return admin.email === adminObj.email;
        });

        // Set lại sau khi tìm thấy
        if (adminFound) {
          setCurAdminLogin(adminFound);
        }
      }
    } else {
      // Thông báo cần đăng nhập
      setCheckLogin(true);
    }
  }, [users]);

  //lấy user hiện tại-----------------------------------------------
  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 mt-24">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Profile
          </h2>
          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <a className="font-medium" href="/">
                  Dashboard /
                </a>
              </li>
              <li className="font-medium text-primary">Profile</li>
            </ol>
          </nav>
        </div>
        {/* body------------------------------------------------ */}
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className=" z-20 h-35 md:h-65">
            <img
              src="https://react-demo.tailadmin.com/assets/cover-01-e8bbef04.png"
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            />
          </div>
          <div className="px-4 pb-6  ">
            {/* thêm ảnh đại diện */}
            <div className="relative z-30 mx-auto top-[-130px] h-30 w-max rounded-full bg-white/20  backdrop-blur p-5 ">
              <div className="relative drop-shadow-2 ">
                <img
                  src={curAdminLogin.avata}
                  alt="profile"
                  className="size-40 rounded-full"
                />
                <label
                  htmlFor="profile"
                  className="absolute bottom-0 right-0 flex  cursor-pointer items-center justify-center rounded-full bg-indigo-400 p-2 text-white hover:bg-opacity-90  "
                >
                  <svg
                    className="fill-current size-5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                      fill=""
                    />
                  </svg>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            {/* render thông tin */}
            <div className="mt-[-120px]">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white text-center">
                {curAdminLogin.full_name}
              </h3>
              <div className="flex  gap-5">
                <h3 className="bg-indigo-500 text-white py-4 px-2 rounded-md ">
                  Description
                </h3>
                <p className="bg-stone-50 p-3 rounded-md ">
                  Hello, my name is Minh, and I have over five years of
                  experience in retail sales. I prioritize customer satisfaction
                  and strive to offer high-quality products with excellent
                  service. Feel free to reach out if you have any questions; I'm
                  always here to help!
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <h3 className="  py-6 px-2">User Details</h3>
                <div className="grid grid-cols-3 gap-5">
                  <div className=" h-14 flex gap-5 items-center px-3">
                    <div className="flex gap-5 items-center flex-2  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>ID:</p>
                      <p>{curAdminLogin.id}</p>
                    </div>
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Status: </p>
                      <p>Locked</p>
                    </div>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                    <p>Full name:</p>
                    <p>{curAdminLogin.full_name}</p>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                    <p>Email:</p>
                    <p>{curAdminLogin.email}</p>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                    <p>Address:</p>
                    <p>{curAdminLogin.address}</p>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3">
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Created:</p>
                      <p>{curAdminLogin.created_at}</p>
                    </div>
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Updated</p>
                      <p>{curAdminLogin.updated_at}</p>
                    </div>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 ">
                    <div className="flex gap-5 items-center flex-2  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Phone:</p>
                      <p>{curAdminLogin.phone}</p>
                    </div>
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Role: </p>
                      <p>{curAdminLogin.role ? "Admin" : "User"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
