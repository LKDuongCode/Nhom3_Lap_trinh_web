import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../../interface/combineType";
import { ChangeEvent, useEffect, useState } from "react";
import { Product } from "../../../interface/productsType";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { User } from "../../../interface/usersType";
import { searchProductByName } from "../../../services/products/searchProduct.service";
import {
  sortProductsDownToUp,
  sortProductsUpToDown,
} from "../../../services/products/sortProduct.service";
import { filterProducts } from "../../../services/products/filterProducts.service";

export default function ProductList() {
  let dispatch = useDispatch();
  //lấy dữ liệu được truyền từ categories
  let location = useLocation();
  let categoryInfo = location.state;
  //check login-------------------------------------------------
  let [checkLogin, setCheckLogin] = useState<boolean>(false);

  // lấy dữ liệu redux--------------------------------------------
  let products = useSelector((state: CombineType) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //lấy mảng user
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
  useEffect(() => {
    let curUser = localStorage.getItem("curUserLogin");
    if (curUser) {
      let userObj = JSON.parse(curUser);
      let userFound = users.find((user: User) => {
        return user.email === userObj.email;
      });
      //set lại sau khi tìm thấy
      if (userFound) {
        setCurUserLogin(userFound);
        setCheckLogin(true);
      }
    } else {
      //thông báo cần đăng nhập
      setCheckLogin(false);
    }
  }, [users]);

  //lấy user hiện tại-----------------------------------------------

  //tạo mảng chứa các product thuộc category đó--------------------------------------------
  let [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (products.length > 0 && categoryInfo) {
      let matchingProducts = products.filter(
        (product) => product.category_id === categoryInfo
      );
      setFilteredProducts(matchingProducts);
    }
  }, [products, categoryInfo, users]);
  //tạo mảng chứa các product thuộc category đó--------------------------------------------

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

  // lọc--------------------------------------------------------
  let [priceRange, setPriceRange] = useState<string>("default");
  useEffect(() => {
    if (priceRange === "default") {
      dispatch(fetchProducts());
    }
  }, [priceRange]);
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedValue = e.target.value;
    setPriceRange(selectedValue);

    let minPrice = 0;
    let maxPrice = 0;

    switch (selectedValue) {
      case "100-200":
        minPrice = 100;
        maxPrice = 200;
        break;
      case "200-500":
        minPrice = 200;
        maxPrice = 500;
        break;
      case "500-1000":
        minPrice = 500;
        maxPrice = 1000;
        break;
      case "moreThan1000":
        minPrice = 1000;
        maxPrice = 10000;
        break;
      default:
        break;
    }

    dispatch(filterProducts({ minPrice, maxPrice }));
  };

  // lọc--------------------------------------------------------
  //hàm điều hướng
  const navigate = useNavigate();
  const handleNavigate = (product: Product) => {
    navigate(`/productDetail?${product.id}`, {
      state: { productId: product.id, categoryId: product.category_id },
    });
  };
  return (
    <div>
      <div className="py-14 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-md mb-12 flex justify-between bg-white p-4 ">
            <p className="font-manrope font-bold text-4xl text-black max-xl:text-center ">
              Products List
            </p>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search your products..."
              className="w-[400px] outline-none border-2 rounded-md border-stone-300 border-solid text-base p-2"
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
              <div className="flex items-center justify-center p-2 border-2 rounded-md border-stone-300 border-solid">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-6 w-6 text-indigo-500"
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
                  <select
                    name="priceRange"
                    id="priceRange"
                    className="border-none bg-transparent"
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                  >
                    <option value="default">Choose price</option>
                    <option value="100-200">100-200</option>
                    <option value="200-500">200-500</option>
                    <option value="500-1000">500-1000</option>
                    <option value="moreThan1000">more than 1000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product: Product) => {
              return (
                <div
                  onClick={() => handleNavigate(product)}
                  key={product.id}
                  className="relative bg-cover group rounded-lg bg-center overflow-hidden border-solid border-2 border-stone-300 p-1 cursor-pointer flex justify-center items-center w-[280px]"
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
                        {checkLogin && (
                          <>
                            <svg
                              className={`size-6 text-indigo-500  border-2 border-solid rounded-full ${
                                curUserLogin.favorites.includes(product.id)
                                  ? "bg-red-400 text-white"
                                  : ""
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
                              className={`h-6 w-6 text-indigo-500 border-2 border-solid rounded-full ${
                                curUserLogin.carts.includes(product.id)
                                  ? "bg-green-500 text-white border-green-500"
                                  : ""
                              }`}
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
                          </>
                        )}
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
