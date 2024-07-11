import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../interface/productsType";
import { CombineType } from "../../../interface/combineType";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../services/products/getProducts.service";

export default function TopNewHomeUS() {
  // lấy dữ liệu redux--------------------------------------------
  const dispatch = useDispatch();
  let products: Product[] = useSelector((state: CombineType) => {
    return state.products.data;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  let [productArrrival, setProductArrival] = useState<Product[]>([]);

  useEffect(() => {
    let newArr: Product[] = products.slice(-4);
    setProductArrival(newArr);
  }, [products]);
  // lấy dữ liệu redux-------------------------------------------------
  return (
    <div className="container pb-16 px-5">
      <h2 className="text-2xl font-semibold text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {productArrrival.map((product: Product) => {
          return (
            <div
              key={product.id}
              className="bg-white shadow rounded-sm overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.product_image}
                  className="w-full  h-[238px] rounded-sm"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <div
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition cursor-pointer"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                  <div
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition cursor-pointer"
                    title="add to wishlist"
                  >
                    <i className="fa-solid fa-heart" />
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate">
                    {product.product_name}
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">
                    ${product.unit_price}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                    <span>
                      <i className="fa-solid fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-1 text-center text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition font-semibold"
              >
                Add to cart
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
