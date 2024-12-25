import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../interface/productsType";
import { fetchProducts } from "../../services/products/getProducts.service";
import { CombineType } from "../../interface/combineType";
import { fetchUsers } from "../../services/users/getUsers.service";
import { User } from "../../interface/usersType";
import { searchProductByName } from "../../services/products/searchProduct.service";

export default function HeaderUser() {
  //state kiểm tra trnagj thái đăng nhập
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
  //quản lí ẩn hiện thanh tìm kiếm và logo--------------------------------------------------------
  const navigate = useNavigate();
  let [locationPage, setLocationPage] = useState<string>(window.location.href);
  useEffect(() => {
    setLocationPage(window.location.href);
  }, [location]);

  let products: Product[] = useSelector((state: CombineType) => {
    return state.products.data;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //quản lí ẩn hiện thanh tìm kiếm--------------------------------------------------------

  // lấy dữ liệu redux -------------------------------------------------
  const dispatch = useDispatch();
  //users
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //mảng chứa carts

  // lấy dữ liệu redux -------------------------------------------------

  //lấy user hiện tại-----------------------------------------------
  let [curUserLogin, setCurUserLogin] = useState<User>({
    id: 0,
    user_name: "",
    email: "",
    password: "",
    role: false,
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
      let adminObj = JSON.parse(curUser);
      let adminFound = users.find((admin: User) => {
        return admin.email === adminObj.email;
      });
      //set lại sau khi tìm thấy
      if (adminFound) {
        setCurUserLogin(adminFound);
        setCheckLogin(true);
      } else {
        setCheckLogin(false);
      }
    }
  }, [users]);

  //hàm logout
  let [checkDelete, setCheckDelete] = useState<boolean>(false);
  const handleLogout = () => {
    setCheckDelete(true);
  };

  const confirmLogout = () => {
    //xóa hết trạng thái đăng nhập trên local.
    localStorage.setItem("curUserLogin", JSON.stringify({}));
    navigate("/usersLogin");
  };

  //tìm kiếm
  let [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      dispatch(fetchProducts());
    } else if (searchTerm !== "") {
      dispatch(searchProductByName(searchTerm));
    }
  }, [searchTerm]);

  const handleNavigate = (product: Product) => {
    navigate(`/productDetail?${product.id}`, {
      state: { productId: product.id, categoryId: product.category_id },
    });
  };
  return (
    <div className=" w-full bg-[#F1F5F9] z-50">
      <nav className="bg-gray-800 fixed w-full px-4 shadow-lg left-0 right-0 top-0 z-50">
        <div className="container flex justify-between w-full">
          <div className="flex">
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden hover:bg-indigo-500">
              <span className="text-white">
                <i className="fa-solid fa-bars" />
              </span>
              <span className="capitalize ml-2 text-white hidden">
                All Categories
              </span>
              {/* dropdown */}
              <div className="absolute w-52 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a
                  className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5"
                  onClick={() => navigate("/terms")}
                >
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />{" "}
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Supports
                  </span>
                </a>
                <a
                  className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5"
                  onClick={() => navigate("/terms")}
                >
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    About Us
                  </span>
                </a>
                <a
                  className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5"
                  onClick={() => navigate("/terms")}
                >
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="10" y1="14" x2="21" y2="3" />{" "}
                    <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Feelback
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 h-full">
              <div
                className="flex items-center space-x-6 capitalize hover:bg-indigo-500 h-full px-6"
                onClick={() => navigate("/")}
              >
                <div className="text-gray-200 transition font-semibold text-lg ">
                  Home
                </div>
              </div>
              <div
                className="flex items-center space-x-6 capitalize hover:bg-indigo-500 h-full px-6"
                onClick={() => navigate("categories")}
              >
                <div className="text-gray-200 transition font-semibold text-lg ">
                  Shop
                </div>
              </div>
              {checkLogin && (
                <div
                  className="flex items-center space-x-6 capitalize hover:bg-indigo-500 h-full px-6"
                  onClick={() => navigate("bills")}
                >
                  <div className="text-gray-200 transition font-semibold text-lg ">
                    Bills
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4 ">
            {checkLogin && (
              <Link
                className="text-center text-white hover:text-indigo-400 transition relative"
                to={"wishList"}
              >
                <div className="text-2xl">
                  <i className="fa-regular fa-heart" />
                </div>
                <div className="text-xs leading-3">Wishlist</div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-indigo-500 text-white text-xs">
                  {curUserLogin.favorites.length}
                </div>
              </Link>
            )}

            {checkLogin && (
              <Link
                to={"/carts"}
                className="text-center text-white hover:text-indigo-400 transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-solid fa-bag-shopping" />
                </div>
                <div className="text-xs leading-3">Cart</div>
                <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-indigo-500 text-white text-xs">
                  {curUserLogin.carts.length}
                </div>
              </Link>
            )}
            <div className=" py-4 bg-primary md:flex items-center cursor-pointer relative group hidden ">
              <div className="text-white flex-col items-center justify-center hover:text-indigo-400 transition">
                <div className="text-xl pl-3">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="text-xs ">Account</div>
              </div>
              {/* dropdown */}
              <div className="absolute w-52 -left-32 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                {!checkLogin && (
                  <div className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-1">
                    <Link
                      className=" text-gray-600 text-md font-medium"
                      to={"/usersLogin"}
                    >
                      Login /
                    </Link>
                    <Link
                      className=" text-gray-600 text-md font-medium"
                      to={"/usersRegister"}
                    >
                      Sign-up
                    </Link>
                  </div>
                )}
                {checkLogin && (
                  <>
                    <Link
                      className="flex items-center px-5 py-2 hover:bg-gray-100 transition gap-5"
                      to={"profile"}
                    >
                      <svg
                        className="size-8 text-indigo-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                        <line x1="13" y1="8" x2="15" y2="8" />{" "}
                        <line x1="13" y1="12" x2="15" y2="12" />
                      </svg>
                      <span className=" text-gray-600 text-md font-medium">
                        Profile
                      </span>
                    </Link>
                    <a className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5">
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className=" text-gray-600 text-md font-medium">
                        Inbox
                      </span>
                    </a>
                    <div
                      onClick={handleLogout}
                      className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5 cursor-pointer"
                    >
                      <svg
                        className="h-6 w-6 text-indigo-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                      </svg>
                      <span className=" text-gray-600 text-md font-medium">
                        Log-out
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {location.pathname === "/" && (
        <div className="py-4 shadow-sm mt-20">
          <div className="container flex items-center justify-between gap-40">
            <a
              href="http://localhost:5173/"
              className="flex gap-2 items-center bg-black py-2 px-5 rounded-e-md max-w-56"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
                alt="Logo"
                className="size-12 bg-purple-300 rounded-full"
              />
              <p className="font-extrabold text-white text-2xl">Tech Shop</p>
            </a>
            <div className="flex w-full ">
              <div className="w-full max-w-3xl relative flex flex-3 ">
                <span className="absolute left-4 top-4 text-lg text-indigo-500">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input
                  type="text"
                  className="w-full border-stone-200 border-solid border-b-transparent   pl-12 py-4 pr-3 rounded-l-md focus:outline-none  flex text-base"
                  placeholder="Search something ..."
                  onChange={handleSearch}
                />
                {searchTerm !== "" && (
                  <ul className="absolute w-full bg-white border-solid border-stone-50 max-h-80 top-16 rounded-b-md p-2 overflow-y-auto">
                    {products.map((product: Product) => {
                      return (
                        <li
                          className="hover:bg-stone-200 p-3"
                          key={product.id}
                          onClick={() => handleNavigate(product)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-bold truncate">
                              {product.product_name}
                            </p>
                            <p className="font-semibold">
                              $ {product.unit_price}
                            </p>
                          </div>
                          <hr />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <a
              href="http://localhost:5173/"
              className="flex gap-2 items-center bg-black py-2 px-7 rounded-s-md max-w-56"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
                alt="Logo"
                className="size-12 bg-purple-300 rounded-full"
              />
              <p className="font-extrabold text-white text-2xl"> SALE 30%</p>
            </a>
          </div>
        </div>
      )}
      {/* delete modal */}
      {checkDelete && (
        <div className="z-[0]">
          {/* modal delete */}

          <div
            className={`relative ${checkDelete ? "z-[1]" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                checkDelete
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkDelete
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                  checkDelete
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
                          Warning
                        </h3>
                        <div className="mt-2">
                          <p className=" text-gray-500">
                            Are you sure you want to logout this account?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className=" border-none inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={confirmLogout}
                    >
                      Log-out
                    </button>
                    <button
                      type="button"
                      className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setCheckDelete(false);
                      }}
                    >
                      Cancel
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
