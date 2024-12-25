import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../../interface/combineType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import UsersLogin from "../UsersLogin";
import countries from "../../../func/countries";
import { formatDate, validatePhoneNumber } from "../../../func/format";
import { validateEmail } from "../../../func/validateEmail";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/fireBase";
import { updateAuser } from "../../../services/users/updateUser.service";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  // Lấy danh sách users về từ Redux store------------------------------------
  let users = useSelector((state: CombineType) => state.users.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
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

  //cập nhật thông tin cá nhân------------------------------------------------------
  let [checkUpdateForm, setCheckUpdateForm] = useState<boolean>(false);
  //lấy dữ liệu người dùng
  let [updatedUser, setUpdatedUser] = useState<any>({
    id: 0,
    user_name: "",
    email: "",
    full_name: "",
    avata: "",
    phone: "",
    address: "",
    updated_at: "",
  });
  useEffect(() => {
    if (curUserLogin.email !== "") {
      setUpdatedUser({
        id: curUserLogin.id,
        user_name: curUserLogin.user_name,
        email: curUserLogin.email,
        full_name: curUserLogin.full_name,
        avata: curUserLogin.avata,
        phone: curUserLogin.phone,
        address: curUserLogin.address,
        updated_at: formatDate(new Date()),
      });
    }
  }, [users]);
  //hàm tạo update user
  const handleCreateUpdateUser = (e: any) => {
    let { value, name } = e.target;
    setUpdatedUser((pre: any) => ({
      ...pre,
      [name]: value,
    }));
  };
  //upload ảnh+++++++++++++++++++++++++++++++++++++++++++
  let [imageUpdate, setImageUpdate] = useState<any>();
  let [imageUrlUpdate, setImageUrlUpdate] = useState<any>(null);
  const handleGetImgUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = e.target.files?.[0];
    setImageUpdate(value);
  };

  const uploadImgUpdate = () => {
    if (imageUpdate) {
      const imageRef = ref(storage, `users/${imageUpdate.name}`);
      uploadBytes(imageRef, imageUpdate).then((snapShot) => {
        getDownloadURL(snapShot.ref).then((url) => {
          setImageUrlUpdate(url);
        });
      });
    }
  };

  useEffect(() => {
    if (imageUrlUpdate) {
      setUpdatedUser((pre: any) => ({
        ...pre,
        avata: imageUrlUpdate,
      }));
    }
  }, [imageUrlUpdate]);
  //hàm update ảnh++++++++++++++++++++++++++++++++++

  //hàm cập nhật
  //state validate
  let [validateUp, setValidateUp] = useState<any>({
    empty: false,
    wrongEmail: false,
    wrongPhone: false,
    existEmail: false,
  });
  const handleUpdateInfo = () => {
    //validate trường trống
    if (
      updatedUser.user_name === "" ||
      updatedUser.avata === "" ||
      updatedUser.phone === "" ||
      updatedUser.address === "" ||
      updatedUser.full_name === "" ||
      updatedUser.email === ""
    ) {
      setValidateUp((pre: any) => ({
        ...pre,
        empty: true,
      }));
      return;
    }

    //validate format
    if (!validatePhoneNumber(updatedUser.phone)) {
      setValidateUp((pre: any) => ({
        ...pre,
        wrongPhone: true,
      }));
      return;
    }
    if (!validateEmail(updatedUser.email)) {
      setValidateUp((pre: any) => ({
        ...pre,
        wrongEmail: true,
      }));
      return;
    }
    //validate email đã tồn tại chưa

    // Lọc mảng trừ email đang đăng nhập ra
    let newArrUsers = users.filter((user) => user.email !== curUserLogin.email);

    // Duyệt mảng để tìm email trùng
    let emailFound = newArrUsers.find(
      (user) => user.email === updatedUser.email
    );
    if (emailFound) {
      setValidateUp((pre: any) => ({
        ...pre,
        existEmail: true,
      }));
      return;
    }

    dispatch(updateAuser(updatedUser));
    setCheckUpdateForm(false);
  };

  //cập nhật thông tin cá nhân------------------------------------------------------

  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 mt-24">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-black text-white rounded-e-full w-2/3 p-5 ">
          <h2 className=" font-semibold ">Your Profile</h2>
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
                  src={curUserLogin.avata}
                  alt="profile"
                  className="size-40 rounded-full"
                />
              </div>
            </div>
            {/* render thông tin */}
            <div className="mt-[-120px]">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white text-center">
                {curUserLogin.user_name}
              </h3>

              <div className="flex flex-col gap-5 mt-5">
                <div className="flex justify-between items-center">
                  <h3 className="  py-6 px-2">User Details</h3>
                  <button
                    onClick={() => setCheckUpdateForm(true)}
                    className="border-none text-green-50 bg-green-500 rounded p-2 h-max font-medium hover:bg-green-600 cursor-pointer"
                  >
                    Update Infomation
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div className=" h-14 flex gap-5 items-center px-3">
                    <div className="flex gap-5 items-center flex-2  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>ID:</p>
                      <p>{curUserLogin.id}</p>
                    </div>
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Status: </p>
                      <p>{curUserLogin.status ? "Active" : "Locked"}</p>
                    </div>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                    <p>Full name:</p>
                    <p>{curUserLogin.full_name}</p>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                    <p>Email:</p>
                    <p>{curUserLogin.email}</p>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                    <p>Address:</p>
                    <p>{curUserLogin.address}</p>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3">
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Created:</p>
                      <p>{curUserLogin.created_at}</p>
                    </div>
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Updated</p>
                      <p>{curUserLogin.updated_at}</p>
                    </div>
                  </div>
                  <div className=" h-14 flex gap-5 items-center px-3 ">
                    <div className="flex gap-5 items-center flex-2  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Phone:</p>
                      <p>{curUserLogin.phone}</p>
                    </div>
                    <div className="flex gap-5 items-center flex-1  h-full px-3 rounded-md font-medium border-3 border-indigo-300 border-solid">
                      <p>Role: </p>
                      <p>{curUserLogin.role ? "Admin" : "User"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form update info */}
      {checkUpdateForm && (
        <div className="addModal">
          <div className=" bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 w-1/2 dark:bg-gray-800 dark:border-gray-700">
            {/* close */}
            <p
              className="float-right p-4"
              onClick={() => {
                setCheckUpdateForm(false);
                // setImageUrlUpdate(null);
              }}
            >
              <svg
                className="h-6 w-6 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white uppercase text-center">
                update your information
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                    Your full name
                  </label>
                  <input
                    onClick={() =>
                      setValidateUp({
                        empty: false,
                        wrongEmail: false,
                        wrongPhone: false,
                        existEmail: false,
                      })
                    }
                    value={updatedUser.full_name}
                    onChange={handleCreateUpdateUser}
                    name="full_name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="enter your full name...."
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Username
                    </label>
                    <input
                      onClick={() =>
                        setValidateUp({
                          empty: false,
                          wrongEmail: false,
                          wrongPhone: false,
                          existEmail: false,
                        })
                      }
                      value={updatedUser.user_name}
                      onChange={handleCreateUpdateUser}
                      type="text"
                      name="user_name"
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium "
                    />
                  </div>
                  <div className="">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      value={updatedUser.email}
                      onChange={handleCreateUpdateUser}
                      onClick={() =>
                        setValidateUp({
                          empty: false,
                          wrongEmail: false,
                          wrongPhone: false,
                          existEmail: false,
                        })
                      }
                      name="email"
                      type="text"
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium "
                    />
                  </div>
                  <div className="">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Phone number
                    </label>
                    <input
                      onClick={() =>
                        setValidateUp({
                          empty: false,
                          wrongEmail: false,
                          wrongPhone: false,
                          existEmail: false,
                        })
                      }
                      value={updatedUser.phone}
                      onChange={handleCreateUpdateUser}
                      name="phone"
                      type="text"
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium "
                    />
                  </div>
                  <div className="">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Adress
                    </label>

                    <select
                      onClick={() =>
                        setValidateUp({
                          empty: false,
                          wrongEmail: false,
                          wrongPhone: false,
                          existEmail: false,
                        })
                      }
                      name="address"
                      onChange={handleCreateUpdateUser}
                      defaultValue={updatedUser.address}
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium text-center"
                    >
                      <option
                        value={updatedUser.address}
                        className="font-medium"
                      >
                        {updatedUser.address}
                      </option>
                      {countries.map(
                        (
                          choice: { name: string; cities: string[] },
                          index: number
                        ) => {
                          return (
                            <option
                              key={index}
                              value={choice.name}
                              className="font-medium"
                            >
                              {choice.name}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                  <div className="col-span-2">
                    {validateUp.wrongEmail && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Email is in wrong format
                      </p>
                    )}
                    {validateUp.existEmail && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Email is exits
                      </p>
                    )}
                    {validateUp.empty && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Fields cannot be left blank
                      </p>
                    )}
                    {validateUp.wrongPhone && (
                      <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                        Phone number is in wrong format
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between col-span-2">
                    <div className="file-upload-wrapper mt-3 flex flex-col">
                      <div className="flex gap-3 items-center">
                        <label
                          htmlFor="file-upload"
                          className=" bg-indigo-500 font-semibold text-white py-2 px-4 rounded cursor-pointer"
                        >
                          Image
                        </label>
                        {imageUpdate && (
                          <button
                            className="size-max border-transparent cursor-pointer bg-green-500 rounded px-2 py-1"
                            onClick={uploadImgUpdate}
                          >
                            <svg
                              className="size-6 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />{" "}
                              <polyline points="17 8 12 3 7 8" />{" "}
                              <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                          </button>
                        )}
                        {imageUrlUpdate && (
                          <p className="font-medium text-sm text-green-500">
                            Upload Success !
                          </p>
                        )}
                      </div>
                      <input
                        id="file-upload"
                        onChange={handleGetImgUpdate}
                        type="file"
                        className="hidden"
                      />
                      <span
                        id="file-name"
                        className="ml-2 text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap mt-3"
                      >
                        {/* {imageUrl === null ? "No file chosen" : image.name} */}
                      </span>
                    </div>
                    <div>
                      <img
                        src={updatedUser.avata}
                        alt=""
                        className="max-w-48 max-h-40"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleUpdateInfo}
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:bg-green-500 font-medium rounded-lg  px-5 py-2.5 text-center border-transparent"
                >
                  UPDATE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
    </>
  );
}
