import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../../interface/combineType";
import { Product } from "../../../interface/productsType";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { deleteAwish } from "../../../services/wishs/deleteFromWishList.service";

export default function WishList() {
  // lấy dữ liệu redux--------------------------------------------
  const dispatch = useDispatch();
  let products: Product[] = useSelector((state: CombineType) => {
    return state.products.data;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //mảng chứa các đối tượng yếu thích
  let [favoProducts, setFavoProduct] = useState<Product[]>([]);
  useEffect(() => {
    if (products.length > 0) {
      let favorites = products.filter((product) => product.favorite === true);
      setFavoProduct(favorites);
    }
  }, [products]);
  // lấy dữ liệu redux-------------------------------------------------

  //xóa sản phẩm khỏi yêu thích---------------------------------------
  const handleDeleteFromFavorites = (id: number) => {
    dispatch(deleteAwish(id));
  };
  //xóa sản phẩm khỏi yêu thích---------------------------------------

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
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
            />
            <div className="flex gap-7">
              <div className="flex gap-4 items-center">
                <p>Sort by</p>
                <select
                  name=""
                  id=""
                  className="p-1 border-2 rounded-md border-red-300 border-solid"
                >
                  <option value="">Cheapest</option>
                  <option value="">The most expensive</option>
                  <option value="">Latest</option>
                  <option value="">Oldest</option>
                </select>
              </div>
              <div className="flex items-center justify-center p-2 border-2 rounded-md border-red-300 border-solid h-max">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-6 w-6 text-red-500"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {favoProducts.map((product: Product) => {
              return (
                <div
                  key={product.id}
                  className="relative bg-cover group rounded-lg bg-center overflow-hidden border-solid border-2 border-red-300 p-1 cursor-pointer flex justify-center items-center w-[280px]"
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
                          onClick={() => handleDeleteFromFavorites(product.id)}
                          className={`size-6 text-indigo-500  hover:text-white hover:bg-red-400 border-2 border-solid rounded-full ${
                            product.favorite ? "bg-red-400 text-white" : ""
                          }`}
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
                          <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                        <svg
                          className="h-6 w-6 text-indigo-500 border-2 border-solid  hover:text-white hover:bg-indigo-500 rounded-full "
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
