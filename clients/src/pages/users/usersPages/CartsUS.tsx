import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../../../interface/productsType";
import { CombineType } from "../../../interface/combineType";
import { fetchCarts } from "../../../services/cart/getCarts.service";
import { deleteACart } from "../../../services/cart/deleteCarts.service";

export default function CartsUS() {
  // lấy dữ liệu redux--------------------------------------------
  const dispatch = useDispatch();
  let cartsDb: Cart[] = useSelector((state: CombineType) => {
    return state.carts.data;
  });
  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  //mảng chứa carts
  let [carts, setCarts] = useState<Cart[]>([]);
  useEffect(() => {
    if (cartsDb.length > 0) {
      setCarts([...cartsDb]);
    }
  }, [cartsDb]);
  // lấy dữ liệu redux-------------------------------------------------

  // tính tiền tạm tính dựa trên số lượng------------------------------------------------
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>(
    {}
  );

  // Hàm xử lý thay đổi số lượng sản phẩm
  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    cartId: string
  ) => {
    const newQuantity = parseInt(e.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cartId]: newQuantity,
    }));
  };
  // tính tiền tạm tính dựa trên số lượng------------------------------------------------

  //tính tổng tiền dựa trên tiền tạm thời-------------------------------------------
  // Hàm xử lý thay đổi checkbox
  const handleCheckboxChange = (cartId: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [cartId]: !prevCheckedItems[cartId],
    }));
  };

  // Tính tổng tiền
  const calculateTotal = () => {
    let total = 0;
    carts.forEach((cart) => {
      if (checkedItems[cart.id]) {
        const quantity = quantities[cart.id] || 1;
        total += cart.unit_price * quantity;
      }
    });
    return total;
  };
  //tính tổng tiền dựa trên tiền tạm thời-------------------------------------------

  //xóa khỏi cart-----------------------------------------------------
  const handleDeleteACart = (id: number) => {
    dispatch(deleteACart(id));
  };
  //xóa khỏi cart-----------------------------------------------------
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
            />
            <div className="flex gap-7">
              <div className="flex gap-4 items-center">
                <p>Sort by</p>
                <select
                  name=""
                  id=""
                  className="p-1 border-2 rounded-md border-green-300 border-solid"
                >
                  <option value="">Cheapest</option>
                  <option value="">The most expensive</option>
                  <option value="">Latest</option>
                  <option value="">Oldest</option>
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

          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3 ">
              <div className="grid grid-cols-1  gap-8 ">
                {carts.map((cart: Cart) => {
                  return (
                    <div
                      key={cart.id}
                      className="bg-white border-2 border-solid border-green-200 h-40 p-2 rounded-md flex gap-5 items-center"
                    >
                      {/* đây là input checkbox */}
                      <input
                        type="checkbox"
                        className="size-5"
                        checked={checkedItems[cart.id] || false}
                        onChange={() =>
                          handleCheckboxChange(cart.id.toString())
                        }
                      />

                      <div className=" grid grid-cols-4 gap-2">
                        <div className="max-w-48 h-full">
                          <img
                            src={cart.product_image}
                            alt=""
                            className="size-full rounded-md"
                          />
                        </div>
                        <div className=" col-span-2 flex flex-col gap-2">
                          <div className="w-full h-2/3 bg-stone-100 rounded flex flex-col gap-2 p-1">
                            <p className=" font-semibold">
                              {cart.product_name}
                            </p>
                            <p className="h-14 text-sm  truncate ">
                              {cart.description}
                            </p>
                          </div>
                          <div className="w-full h-1/3 bg-white flex gap-2 p-1 rounded">
                            <div className=" w-2/3 truncate flex items-center text-xl font-bold">
                              {cart.unit_price}
                            </div>
                            <div className=" flex items-center w-1/3">
                              <input
                                type="number"
                                className="w-full h-full rounded text-center font-semibold text-base border-stone-300 border-solid"
                                value={quantities[cart.id] || 1}
                                onChange={(e) =>
                                  handleQuantityChange(e, cart.id.toString())
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1  h-full flex flex-col justify-between rounded">
                          <div className="flex flex-col gap-3">
                            <p className="font-semibold text-xl text-center bg-indigo-400 text-white rounded p-2">
                              Temporary total
                            </p>
                            {/* đây là tiền tính tạm của mỗi đối tượng */}
                            <p className="text-green-400 font-semibold text-2xl text-center">
                              ${" "}
                              {quantities[cart.id]
                                ? cart.unit_price * quantities[cart.id]
                                : cart.unit_price}
                            </p>
                          </div>
                          <div>
                            <div
                              onClick={() => handleDeleteACart(cart.id)}
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
                                {" "}
                                <polyline points="3 6 5 6 21 6" />{" "}
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                                <line x1="10" y1="11" x2="10" y2="17" />{" "}
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
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-5 bg-white p-3 rounded">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-base font-semibold">Send to</p>
                    <button className="text-sm font-medium text-green-500 bg-green-100 rounded p-1 border-none">
                      change
                    </button>
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
                  {/* đây là tônhr tiền */}
                  <p className="text-3xl font-bold text-red-500">
                    $ {calculateTotal()}
                  </p>
                </div>
                <div>
                  <button className="w-full border-transparent bg-red-500 text-white p-2 rounded text-base font-semibold cursor-pointer">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
