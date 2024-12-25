import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../../interface/combineType";
import { Product } from "../../../interface/productsType";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { deleteAwish } from "../../../services/wishs/deleteFromWishList.service";
import { User } from "../../../interface/usersType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { useNavigate } from "react-router-dom";
import { searchProductByName } from "../../../services/products/searchProduct.service";
import {
  sortProductsDownToUp,
  sortProductsUpToDown,
} from "../../../services/products/sortProduct.service";

export default function WishList() {
  // lấy dữ liệu redux--------------------------------------------
  const dispatch = useDispatch();
  let products: Product[] = useSelector((state: CombineType) => {
    return state.products.data;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // lấy dữ liệu redux-------------------------------------------------

  //lấy user hiện tại-----------------------------------------------
  //lấy mảng user
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  let [checkLogin, setCheckLogin] = useState<boolean>(false);
  const navigate = useNavigate();
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

  //tạo mảng yêu thích----------------------------------------------
  let [favoProducts, setFavoProduct] = useState<Product[]>([]);
  useEffect(() => {
    if (products.length > 0 && users.length && curUserLogin.email !== "") {
      let filterFavorites: Product[] = products.filter((product: Product) => {
        return curUserLogin.favorites.includes(product.id);
      });
      setFavoProduct(filterFavorites);
    }
  }, [products, users]);

  //xóa sản phẩm khỏi yêu thích---------------------------------------

  const handleDeleteFromFavorites = (userId: number, proId: number) => {
    // Loại bỏ id của sản phẩm khỏi mảng favorites
    let deletedFavs = curUserLogin.favorites.filter(
      (favId: number) => favId !== proId
    );
    setCurUserLogin((pre: any) => ({
      ...pre,
      favorites: deletedFavs,
    }));

    dispatch(deleteAwish({ userId: userId, arrDeleted: deletedFavs }));
  };
  //xóa sản phẩm khỏi yêu thích---------------------------------------

  //tìm kiếm------------------------------------------------------------
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
  //tìm kiếm------------------------------------------------------------

  //sắp xếp--------------------------------------------------------------

  const sortProducts = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "default") {
      dispatch(fetchProducts());
    } else if (value === "upToDown") {
      dispatch(sortProductsUpToDown());
    } else if (value === "downToUp") {
      dispatch(sortProductsDownToUp());
    }
  };
  //sắp xếp--------------------------------------------------------------

  return (
    <div>
      <div className="py-14 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-md mb-12 flex justify-between  p-4 items-center bg-red-50 ">
            <p className="font-manrope font-bold text-4xl text-red-500 flex gap-1 items-center">
              <svg
                className={`size-20 bg-red-400 border-2 text-red-100 border-solid rounded-full`}
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
                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
              </svg>
              Wist List
            </p>
            <input
              type="text"
              placeholder="Search your products..."
              className="w-[400px] outline-none border-2 rounded-md text-red-500 border-red-300 border-solid text-base p-2 h-max"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="flex gap-7">
              <div className="flex gap-4 items-center">
                <p>Sort by</p>
                <select
                  onChange={sortProducts}
                  className="p-1 border-2 rounded-md border-stone-300 border-solid"
                >
                  <option className="text-black bg-slate-100" value={"default"}>
                    Default
                  </option>
                  <option
                    className="text-black bg-slate-100"
                    value={"upToDown"}
                  >
                    Cheapest
                  </option>
                  <option
                    className="text-black bg-slate-100"
                    value={"downToUp"}
                  >
                    Most Expensive
                  </option>
                </select>
              </div>
              <div className="flex items-center justify-center p-2 border-2 rounded-md border-red-300 border-solid h-max">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-6 w-6 text-red-500"
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
                    <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                  </svg>
                  <select name="" id="" className="border-none bg-transparent">
                    <option value="">100-200</option>
                    <option value="">100-200</option>
                    <option value="">100-200</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {favoProducts.map((product: Product) => {
              return (
                <div
                  key={product.id}
                  className="relative bg-cover group rounded-lg bg-center overflow-hidden border-solid border-2 border-red-300 p-1  flex justify-center items-center w-[280px]"
                >
                  <img
                    className="h-[200px] w-full rounded"
                    src={product.product_image}
                  />
                  <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-lg shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                    <div className="flex items-center justify-between mb-2">
                      <h6 className="font-semibold text-base leading-7 text-black truncate max-w-40">
                        {product.product_name}
                      </h6>
                      <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                        {product.unit_price} $
                      </h6>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-xs leading-5 text-gray-500 truncate max-w-40">
                        {product.description}
                      </p>
                      <div className="flex gap-2 items-center">
                        <svg
                          onClick={() =>
                            handleDeleteFromFavorites(
                              curUserLogin.id,
                              product.id
                            )
                          }
                          className={`size-6 text-white bg-red-500 hover:text-indigo-500 hover:bg-indigo-400 border-2 border-solid rounded-full  cursor-pointer`}
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
                          <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                        <svg
                          className="h-6 w-6 text-indigo-500 border-2 border-solid  hover:text-white hover:bg-indigo-500 rounded-full "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
    </div>
  );
}
