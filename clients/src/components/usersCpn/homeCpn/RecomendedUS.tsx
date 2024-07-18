import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../interface/productsType";
import { CombineType } from "../../../interface/combineType";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { useNavigate } from "react-router-dom";

export default function RecomendedUS() {
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
    let newArr: Product[] = products.slice(15, 23);
    setProductArrival(newArr);
  }, [products]);
  // lấy dữ liệu redux-------------------------------------------------
  const navigate = useNavigate();
  const handleNavigate = (product: Product) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/productDetail?${product.id}`, {
      state: { productId: product.id, categoryId: product.category_id },
    });
  };
  return (
    <div className="container pb-16 px-5">
      <h2 className="text-2xl font-semibold text-gray-800 uppercase mb-6">
        recomended for you
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    onClick={() => handleNavigate(product)}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition cursor-pointer"
                    title="view product"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <div>
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate text-center">
                    {product.product_name}
                  </h4>
                </div>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold text-center w-full">
                    ${product.unit_price}
                  </p>
                </div>
                {/* <div className="flex items-center">
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
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
