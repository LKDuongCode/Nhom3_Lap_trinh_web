import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../../interface/combineType";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../interface/productsType";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import { deleteAcart } from "../../../services/cart/deleteCarts.service";
import { deleteALLcart } from "../../../services/cart/deleteAllCart.service";
import { formatDate, validatePhoneNumber } from "../../../func/format";
import { validateEmail } from "../../../func/validateEmail";
import countries from "../../../func/countries";
import { addToBills } from "../../../services/bills/addABill.service";
import { Bill } from "../../../interface/billsType";
import { searchProductByName } from "../../../services/products/searchProduct.service";
import {
  sortProductsDownToUp,
  sortProductsUpToDown,
} from "../../../services/products/sortProduct.service";

export default function CartsUS() {
  const navigate = useNavigate();
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

  //tạo mảng carts----------------------------------------------
  let [carts, setCarts] = useState<Product[]>([]);
  useEffect(() => {
    if (products.length > 0 && users.length && curUserLogin.email !== "") {
      let filterCarts: Product[] = products.filter((product: Product) => {
        return curUserLogin.carts.includes(product.id);
      });
      setCarts(filterCarts);
    }
  }, [products, users]);

  //xóa khỏi cart-----------------------------------------------------
  //xóa từng sản phẩm
  let [idDelete, setIdDelete] = useState<any>({ userId: 0, arrDeleted: [] });
  let [checkDelete, setCheckDelete] = useState<boolean>(false);
  const handleDeleteACart = (proId: number, userId: number) => {
    setCheckDelete(true);
    // Loại bỏ id của sản phẩm khỏi mảng
    let deletedCarts = curUserLogin.carts.filter(
      (cartId: number) => cartId !== proId
    );
    setCurUserLogin((pre: any) => ({
      ...pre,
      carts: deletedCarts,
    }));
    setIdDelete({ userId: userId, arrDeleted: deletedCarts });
  };
  const confirmDelete = () => {
    dispatch(
      deleteAcart({ userId: idDelete.userId, arrDeleted: idDelete.arrDeleted })
    );
    setCheckDelete(false);
  };

  //xóa hết
  const handleDeleteAll = (userId: number) => {
    setCurUserLogin((pre: any) => ({
      ...pre,
      carts: [],
    }));
    dispatch(deleteALLcart({ userId: userId, arrDeleted: [] }));
  };
  //xóa khỏi cart-----------------------------------------------------

  //tính toán==============================================================
  const [quantities, setQuantities] = useState<number[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    if (curUserLogin.email !== "" && users.length > 0) {
      setQuantities(carts.map(() => 1));
    }
  }, [users, curUserLogin.email]);

  const handleQuantityChange = (index: number, value: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);

    // Tính toán lại tổng tiền
    let newTotal = carts.reduce((sum, cart, i) => {
      return sum + cart.unit_price * newQuantities[i];
    }, 0);
    setTotalAmount(newTotal);
  };

  useEffect(() => {
    if (curUserLogin.email !== "" && users.length > 0) {
      let filterCarts: Product[] = products.filter((product: Product) => {
        return curUserLogin.carts.includes(product.id);
      });
      setCarts(filterCarts);

      // Tính toán tổng tiền ban đầu
      let initialTotal = filterCarts.reduce((sum, cart) => {
        return sum + cart.unit_price;
      }, 0);
      setTotalAmount(initialTotal);
    }
    // Cập nhật chi tiết giỏ hàng
    updateCartDetails();
  }, [products, users, curUserLogin.email]);

  //tính toán==============================================================

  //mua ngay====================================================================
  let [checkUpdateForm, setCheckUpdateForm] = useState<boolean>(false);
  let [validateUp, setValidateUp] = useState<any>({
    empty: false,
    wrongEmail: false,
    wrongPhone: false,
  });
  //lấy dữ liệu người dùng
  let [newBill, setnewBill] = useState<any>({
    user_id: curUserLogin.id,
    full_name: curUserLogin.full_name,
    address: curUserLogin.address,
    detailAddress: "",
    email: curUserLogin.email,
    user_name: curUserLogin.user_name,
    phone: curUserLogin.phone,
    created_at: formatDate(new Date()),
    productIn: [],
    total_price: 0,
  });

  //hàm tạo thông tin
  const handleCreateUpdateUser = (e: any) => {
    let { value, name } = e.target;
    setnewBill((pre: any) => ({
      ...pre,
      [name]: value,
    }));
  };

  //state chứa thông tin thống kê
  let [cartDetails, setCartDetails] = useState<
    { name: string; price: number; totalTemp: number }[]
  >([]);
  const updateCartDetails = () => {
    let details = carts.map((cart, index) => ({
      name: cart.product_name,
      price: cart.unit_price,
      totalTemp: cart.unit_price * quantities[index],
    }));
    setCartDetails(details);
  };
  useEffect(() => {
    if (curUserLogin.email !== "" && users.length > 0) {
      let filterCarts: Product[] = products.filter((product: Product) => {
        return curUserLogin.carts.includes(product.id);
      });
      setCarts(filterCarts);

      // Thiết lập số lượng mặc định
      setQuantities(filterCarts.map(() => 1));

      // Tính toán tổng tiền ban đầu
      let initialTotal = filterCarts.reduce((sum, cart) => {
        return sum + cart.unit_price;
      }, 0);
      setTotalAmount(initialTotal);
    }
  }, [products, users, curUserLogin.email]);

  useEffect(() => {
    updateCartDetails();
  }, [carts, quantities]);

  //nút mua ngay
  const handleBuy = () => {
    if (curUserLogin.email !== "") {
      setnewBill((pre: any) => ({
        ...pre,
        user_id: curUserLogin.id,
        full_name: curUserLogin.full_name,
        address: curUserLogin.address,
        email: curUserLogin.email,
        user_name: curUserLogin.user_name,
        phone: curUserLogin.phone,
        total_price: totalAmount,
        productIn: cartDetails,
      }));
    }
    setCheckUpdateForm(true);
  };
  //nút ok
  const goToPayInfo = () => {
    if (
      newBill.user_name === "" ||
      newBill.phone === "" ||
      newBill.address === "" ||
      newBill.full_name === "" ||
      newBill.email === "" ||
      newBill.detailAddress === ""
    ) {
      setValidateUp((pre: any) => ({
        ...pre,
        empty: true,
      }));
      return;
    }

    //validate format
    if (!validatePhoneNumber(newBill.phone)) {
      setValidateUp((pre: any) => ({
        ...pre,
        wrongPhone: true,
      }));
      return;
    }
    if (!validateEmail(newBill.email)) {
      setValidateUp((pre: any) => ({
        ...pre,
        wrongEmail: true,
      }));
      return;
    }

    setCheckUpdateForm(false);
    dispatch(addToBills(newBill));
    navigate("/payInfo", { state: newBill });
  };
  //mua ngay======================================================================================================

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
          <div className="rounded-lg shadow-md mb-12 flex justify-between  p-4 items-center bg-green-50 ">
            <p className="font-manrope font-bold text-4xl text-green-500 flex gap-1 items-center">
              <svg
                className={`size-20 bg-green-400 border-2 text-green-100 border-solid rounded-full p-2`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Your Cart
            </p>
            <input
              type="text"
              placeholder="Search your products..."
              className="w-[400px] outline-none border-2 rounded-md text-green-500 border-green-300 border-solid text-base p-2 h-max"
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
              <div className="flex items-center justify-center p-2 border-2 rounded-md border-green-300 border-solid h-max">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-6 w-6 text-green-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          <div className=" p-2 my-3">
            <button
              onClick={() => handleDeleteAll(curUserLogin.id)}
              className="bg-red-100 text-red-500 hover:text-white hover:bg-red-500 border-red-500 border-2 border-solid rounded px-5 py-2 font-semibold cursor-pointer"
            >
              Delete All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3 ">
              <div className="grid grid-cols-1 gap-8 ">
                {carts.map((cart: Product, index: number) => {
                  return (
                    <div
                      key={cart.id}
                      className="bg-white border-2 border-solid border-green-200 h-40 p-2 rounded-md flex gap-5 items-center"
                    >
                      <div className="grid grid-cols-4 gap-2">
                        <div className="max-w-48 h-36">
                          <img
                            src={cart.product_image}
                            alt=""
                            className="size-full rounded-md"
                          />
                        </div>
                        <div className="col-span-2 flex flex-col gap-2">
                          <div className="w-full h-2/3 bg-stone-100 rounded flex flex-col gap-2 p-1">
                            <p className="font-semibold">{cart.product_name}</p>
                            <p className="h-14 text-sm truncate">
                              {cart.description}
                            </p>
                          </div>
                          <div className="w-full h-1/3 bg-white flex gap-2 p-1 rounded">
                            <div className="w-2/3 truncate flex items-center text-xl font-bold">
                              $ {cart.unit_price}
                            </div>
                            <div className="flex items-center w-1/3">
                              <input
                                type="number"
                                value={quantities[index]}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    index,
                                    parseInt(e.target.value)
                                  )
                                }
                                className="w-full h-full rounded text-center font-semibold text-base border-stone-300 border-solid"
                                min="1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 h-full flex flex-col justify-between rounded">
                          <div className="flex flex-col gap-3">
                            <p className="font-semibold text-xl text-center bg-indigo-400 text-white rounded p-2">
                              Temporary total
                            </p>
                            <p className="text-green-400 font-semibold text-2xl text-center">
                              $ {cart.unit_price * quantities[index]}
                            </p>
                          </div>
                          <div>
                            <div
                              onClick={() =>
                                handleDeleteACart(cart.id, curUserLogin.id)
                              }
                              className="bg-red-500 w-max h-max p-1 rounded cursor-pointer float-right "
                            >
                              <svg
                                className="size-5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {carts.length === 0 && (
                <div className="bg-white text-green-500  p-5 rounded flex justify-between items-center">
                  <p className="font-medium ">
                    There are no product in your cart !
                  </p>
                  <button
                    onClick={() => navigate("/categories")}
                    className="bg-green-500 px-5 py-1 text-base font-semibold rounded  text-white hover:text-green-500 border-2 border-green-500 border-solid hover:bg-green-100"
                  >
                    Shop Now
                  </button>
                </div>
              )}
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-5 bg-white p-3 rounded">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-base font-semibold">Send to</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-3">
                    <p className="border-2 border-solid border-y-transparent border-l-transparent border-r-stone-400 pr-2">
                      Le Duong
                    </p>
                    <p>1234567890</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600 bg-blue-100 rounded px-2 w-max">
                      address{" "}
                    </p>
                    <p className="mt-3">Ha noi</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <p className="text-xl font-semibold">Total </p>
                  <p className="text-3xl font-bold text-red-500">
                    ${totalAmount}
                  </p>
                </div>

                <div>
                  <button
                    className="w-full border-transparent bg-red-500 text-white p-2 rounded text-base font-semibold cursor-pointer"
                    onClick={handleBuy}
                  >
                    Buy
                  </button>
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
              }}
            >
              <svg
                className="h-6 w-6 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white uppercase text-center">
                Confirm customer information
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
                    value={newBill.full_name}
                    onChange={handleCreateUpdateUser}
                    name="full_name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="enter your full name...."
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 ">
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
                      value={newBill.user_name}
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
                      value={newBill.email}
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
                      value={newBill.phone}
                      onChange={handleCreateUpdateUser}
                      name="phone"
                      type="text"
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium "
                    />
                  </div>

                  <div className="">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Country
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
                      defaultValue={newBill.address}
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium text-center"
                    >
                      <option value={newBill.address} className="font-medium">
                        {newBill.address}
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
                    <label className="block mb-2  font-semibold text-gray-900 dark:text-white">
                      Address
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
                      value={newBill.detailAddress}
                      onChange={handleCreateUpdateUser}
                      name="detailAddress"
                      type="text"
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 font-medium "
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2  font-semibold text-gray-900 dark:text-white ">
                      About Product:
                    </label>
                    <table className="text-center w-full" cellSpacing={10}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Temp</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newBill.productIn.map(
                          (infoPro: any, index: number) => {
                            return (
                              <tr key={index}>
                                <td className="truncate">{infoPro.name}</td>
                                <td>{infoPro.totalTemp / infoPro.price}</td>
                                <td>$ {infoPro.price}</td>
                                <td>$ {infoPro.totalTemp}</td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                      <p className="text-red-500 text-xl font-semibold">
                        Total : $ {totalAmount}
                      </p>
                    </table>
                  </div>

                  {/* validate alert */}
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
                </div>

                <button
                  onClick={goToPayInfo}
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:bg-red-500 font-medium rounded-lg  px-5 py-2.5 text-center border-transparent"
                >
                  BUY
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
                          Warning
                        </h3>
                        <div className="mt-2">
                          <p className=" text-gray-500">
                            Are you sure you want to delete? All of your data
                            will be permanently removed. This action cannot be
                            undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className=" border-none inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={confirmDelete}
                    >
                      Delete
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
