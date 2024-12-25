import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { CombineType } from "../../../interface/combineType";
import { fetchUsers } from "../../../services/users/getUsers.service";
import { Product } from "../../../interface/productsType";
import { User } from "../../../interface/usersType";
import { addAwish } from "../../../services/wishs/addAproductToWishs.service";
import { deleteAwish } from "../../../services/wishs/deleteFromWishList.service";
import { addAcart } from "../../../services/cart/addCarts.service";
import { formatDate, validatePhoneNumber } from "../../../func/format";
import { validateEmail } from "../../../func/validateEmail";
import countries from "../../../func/countries";
import { Bill } from "../../../interface/billsType";
//type cho dữ liệu truyền sang từ productList
type ProductInfo = {
  productId: number;
  categoryId: number;
};
export default function DetailProducts() {
  //lấy dữ liệu được truyền từ productlist
  let location = useLocation();
  let productInfo: ProductInfo = location.state;

  // lấy dữ liệu redux--------------------------------------------
  const dispatch = useDispatch();
  let products = useSelector((state: CombineType) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //lấy mảng user
  let users = useSelector((state: CombineType) => state.users.data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // lấy dữ liệu redux--------------------------------------------

  //lấy đối tượng product hiện tại---------------------------------
  let [curProduct, setCurProduct] = useState<Product>({
    id: 0,
    product_name: "",
    category_id: 0,
    description: "",
    unit_price: 0,
    stock_quantity: 0,
    product_image: "",
    created_at: "",
    updated_at: "",
  });
  useEffect(() => {
    if (products.length > 0) {
      let matchingProduct = products.find(
        (product) => product.id === productInfo.productId
      );
      if (matchingProduct) {
        setCurProduct(matchingProduct);
      }
    }
  }, [products]);
  //lấy đối tượng product hiện tại---------------------------------

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
      }
    }
  }, [users]);
  //lấy user hiện tại-----------------------------------------------

  //lấy mảng tương tự-------------------------------------------
  //lấy mảng categori
  let [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (products.length > 0 && productInfo.categoryId) {
      let matchingProducts = products.filter(
        (product) => product.category_id === productInfo.categoryId
      );
      setFilteredProducts(matchingProducts);
    }
  }, [products, productInfo]);

  //hàm random số đầu slice
  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };
  //state chứa mảng sản phẩm tương tự
  let [sameProduct, setSameProduct] = useState(filteredProducts.slice(0, 5));
  useEffect(() => {
    let maxStartIndex = filteredProducts.length - 5;
    let randomIndex = getRandomNumber(maxStartIndex);
    let newsameProduct = filteredProducts.slice(randomIndex, randomIndex + 5);
    setSameProduct(newsameProduct);
  }, [filteredProducts, productInfo]);
  //lấy mảng tương tự-------------------------------------------

  //tính tiền ước lượng-----------------------------------------------------------
  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  //tính tiền ước lượng-----------------------------------------------------------

  // kiểm tra xem sản phẩm đã được yêu thích chưa ------------------------------------------
  let [productInFavs, setproductInFavs] = useState<boolean>(false);
  useEffect(() => {
    if (users.length > 0 && curUserLogin.email !== "" && curProduct.id !== 0) {
      let existChecking = curUserLogin.favorites.find((proId: number) => {
        return proId === curProduct.id;
      });
      existChecking ? setproductInFavs(true) : setproductInFavs(false);
    }
  }, [users]);
  // kiểm tra xem sản phẩm đã được yêu thích chưa ------------------------------------------

  // kiểm tra xem sản phẩm đã được có trong giỏ hàng chưa chưa ------------------------------------------
  let [productInCarts, setproductInCarts] = useState<boolean>(false);
  useEffect(() => {
    if (users.length > 0 && curUserLogin.email !== "" && curProduct.id !== 0) {
      let existChecking = curUserLogin.carts.find((proId: number) => {
        return proId === curProduct.id;
      });
      existChecking ? setproductInCarts(true) : setproductInCarts(false);
    }
  }, [users]);
  // kiểm tra xem sản phẩm đã được có trong giỏ hàng chưa ------------------------------------------

  //thêm vào carts-------------------------------------------
  const handleAddToCart = (proId: number, userId: number) => {
    // thêm id của sản phẩm vào mảng carts
    if (curUserLogin.email !== "") {
      let addedFavs = [...curUserLogin.carts];
      addedFavs.push(proId);
      setCurUserLogin((pre: any) => ({
        ...pre,
        carts: addedFavs,
      }));
      dispatch(addAcart({ userId: userId, arrAdded: addedFavs }));
    }
  };
  //thêm vào carts-------------------------------------------

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

  //thêm vào favs-------------------------------------------
  const handleAddToFavs = (proId: number, userId: number) => {
    // thêm id của sản phẩm vào mảng favorites
    if (curUserLogin.email !== "") {
      let addFavs = [...curUserLogin.favorites];
      addFavs.push(proId);
      setCurUserLogin((pre: any) => ({
        ...pre,
        favorites: addFavs,
      }));
      dispatch(addAwish({ userId: userId, arrAdded: addFavs }));
    }
  };
  //thêm vào favs-------------------------------------------

  //điều hướng
  const handleNavigate = (product: Product) => {
    setCurProduct(product);
  };
  return (
    <>
      <div className="mx-5 mt-40">
        <div className="grid grid-cols-4 grid-rows-2  gap-5">
          <div className=" row-span-2 rounded-lg p-5 bg-white shadow-lg">
            <img
              src={curProduct.product_image}
              alt=""
              className="w-full h-[340px] rounded-lg"
            />
          </div>
          <div className=" bg-white shadow-lg rounded-lg px-5 col-span-2 flex gap-3 flex-col justify-center ">
            <h2>{curProduct.product_name}</h2>
            <p>Quantity remaining in stock : {curProduct.stock_quantity}</p>
            <div className="flex justify-start gap-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </div>
              <span className="text-slate-400 font-medium">
                3.7 out of 5 stars
              </span>
            </div>

            <div className="flex justify-between">
              <h1 className="text-indigo-600">
                Price : $ {curProduct.unit_price}
              </h1>
              <div className="flex gap-2 items-center">
                {curUserLogin.email !== "" && productInFavs === false && (
                  <button
                    onClick={() =>
                      handleAddToFavs(curProduct.id, curUserLogin.id)
                    }
                    className="
                    bg-white
                     hover:text-white hover:bg-red-400 border-2 border-solid border-indigo-600 font-semibold hover:border-red-500
            text-sm
            text-indigo-600
            leading-5
            rounded-full
            flex justify-center
            items-center
            h-max 
          "
                  >
                    <svg
                      className="size-10 "
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
                  </button>
                )}
                {curUserLogin.email !== "" && productInFavs === true && (
                  <button
                    onClick={() =>
                      handleDeleteFromFavorites(curUserLogin.id, curProduct.id)
                    }
                    className="
                    bg-red-500
                     hover:text-indigo-400 hover:bg-white border-2 border-solid border-red-600 font-semibold hover:border-indigo-500
            text-sm
            text-white
            leading-5
            rounded-full
            flex justify-center
            items-center
            h-max 
          "
                  >
                    <svg
                      className="size-10 "
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
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="row-span-2 rounded-lg p-5 bg-white shadow-lg flex flex-col gap-5 justify-center ">
            <h2 className="uppercase">more detail</h2>
            {/* nếu chưa login */}
            {curUserLogin.email === "" && (
              <>
                {" "}
                <p className="text-sm font-medium">
                  You need to log in or register to continue using the purchase,
                  add to cart and add to favorites functions.
                </p>
                <Link
                  to={"usersLogin"}
                  className="
            font-semibold
            text-lg
            leading-5
            rounded-[0.375rem]
            px-[12px]
            py-[14px]
          bg-indigo-500
          text-center text-white
          border-2 border-solid border-indigo-500
            h-max 
             hover:text-indigo-500
            hover:bg-transparent
            transition
          "
                >
                  Login Now
                </Link>
                <p className="text-xs font-medium">
                  Don't have a Tech Shop account yet? {"  "}
                  <Link to={""} className="text-blue-500">
                    creat an account !
                  </Link>
                </p>
              </>
            )}
            {/* nếu login */}
            {curUserLogin.email !== "" && (
              <>
                <div className="flex gap-5 h-8 items-center">
                  <p className="font-medium">Quantity</p>
                  <input
                    min={0}
                    value={quantity}
                    onChange={handleQuantityChange}
                    type="number"
                    className="text-base text-center py-2 h-8 border-2 border-solid border-stone-400 w-16"
                  />
                </div>
                <h4>Temporary amount </h4>
                <h2 className="text-green-400">
                  $ {quantity * curProduct.unit_price}
                </h2>
                {!productInCarts && (
                  <button
                    onClick={() =>
                      handleAddToCart(curProduct.id, curUserLogin.id)
                    }
                    className="
                        font-semibold
                        text-lg
                        leading-5
                        rounded-[0.375rem]
                        px-[12px]
                        py-[14px]
                      bg-indigo-500
                      text-white
                      border-2 border-solid border-indigo-500
                        h-max 
                        hover:text-indigo-500
                        hover:bg-transparent
                        transition
                      "
                  >
                    Add to Cart
                  </button>
                )}
                {productInCarts && (
                  <div
                    className="
                             font-semibold
                                        text-sm
                                        text-center
                                        leading-5
                                        rounded-[0.375rem]
                                        px-[12px]
                                        py-[14px]                  
                                      text-green-500               
                                        h-max 
                                      "
                  >
                    This product is already in your cart !
                  </div>
                )}
              </>
            )}
          </div>
          <div className=" bg-white shadow-lg rounded-lg p-5 col-span-2 flex gap-3 flex-col">
            <div className="flex gap-1 items-center">
              <p className="border-2 border-solid border-indigo-500 px-4 flex justify-center items-center">
                <svg
                  className="h-8 w-8 text-indigo-500 "
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
                  <circle cx="7" cy="17" r="2" />{" "}
                  <circle cx="17" cy="17" r="2" />{" "}
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />{" "}
                  <line x1="3" y1="9" x2="7" y2="9" />
                </svg>
              </p>
              <h3 className="p-2 px-5 bg-indigo-500 text-white rounded-e-full font-medium">
                Shipping information
              </h3>
            </div>
            <p>to {curUserLogin.address}</p>
            <p>{curProduct.description}</p>
          </div>
        </div>
        <div className="bg-white rounded-md my-5 p-4 flex flex-col gap-5">
          <h3 className="p-4 text-white bg-indigo-500 w-1/2 rounded-e-full rounded-s-md">
            Same Products
          </h3>
          <div className="grid grid-cols-5 gap-14">
            {sameProduct.map((same: Product) => {
              return (
                <div
                  onClick={() => handleNavigate(same)}
                  className="border-solid border-2 border-stone-200 bg-stone-200 p-2 rounded-md cursor-pointer"
                  key={same.id}
                >
                  <img
                    src={same.product_image}
                    alt=""
                    className="rounded-md w-full h-60"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
