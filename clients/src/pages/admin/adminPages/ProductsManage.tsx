import React, { ChangeEvent, useEffect, useState } from "react";
import "../../../style/modal/addModal.scss";
import { Product } from "../../../interface/productsType";
import { useDispatch, useSelector } from "react-redux";
import { CombineType } from "../../../interface/combineType";
import { fetchProducts } from "../../../services/products/getProducts.service";
import { addToProducts } from "../../../services/products/addProducts.service";
import { deleteAproduct } from "../../../services/products/deleteProducts.service";
import { updateAproduct } from "../../../services/products/updateProducts.service";
import { formatDate } from "../../../func/format";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config/fireBase";
import { fetchCategories } from "../../../services/categories/getCategories.service";
import { Category } from "../../../interface/categoriesType";
import { searchProductByName } from "../../../services/products/searchProduct.service";
import {
  sortProductsDownToUp,
  sortProductsUpToDown,
} from "../../../services/products/sortProduct.service";

export default function ProductsManage() {
  const dispatch = useDispatch();
  // state quản lí mở đóng form-------------------------------------------
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  let [checkAddForm, setCheckAddForm] = useState<boolean>(false);
  let [checkUpdateForm, setCheckUpdateForm] = useState<boolean>(false);
  let [checkDelete, setCheckDelete] = useState<boolean>(false);

  // state quản lí mở đóng form-------------------------------------------

  // lấy dữ liệu redux--------------------------------------------
  let products: Product[] = useSelector((state: CombineType) => {
    return state.products.data;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let categories: Category[] = useSelector((state: CombineType) => {
    return state.categories.data;
  });
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  //state lấy category product được chọn
  let [curCategory, setCurCategory] = useState<any>({});

  // lấy dữ liệu redux-------------------------------------------------

  // thêm mới product------------------------------------------------------
  //state upload ảnh++++++++++++++++++++++
  let [image, setImage] = useState<any>();
  let [imageUrl, setImageUrl] = useState<any>(null);
  const handleGetImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = e.target.files?.[0];
    setImage(value);
  };
  //hàm upload
  const uploadImg = () => {
    //tên không được trùng.
    const imageRef = ref(storage, `products/addProduct/${image.name}`);
    uploadBytes(imageRef, image).then((snapShot) => {
      getDownloadURL(snapShot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };
  useEffect(() => {
    if (image) {
      uploadImg();
    }
  }, [image]);

  //state upload ảnh++++++++++++++++++++++

  let [newProduct, setNewProduct] = useState<any>({
    product_name: "",
    description: "",
    unit_price: 0,
    stock_quantity: 0,
    product_image: "",
    category_id: 0,
    created_at: formatDate(new Date()),
    updated_at: formatDate(new Date()),
  });

  //set lại giá trị ảnh sau khi nó có giá trị.
  useEffect(() => {
    setNewProduct((preProduct: any) => ({
      ...preProduct,
      product_image: imageUrl,
    }));
  }, [imageUrl]);

  const handleCreateProduct = (e: any) => {
    let { value, name } = e.target;
    setNewProduct((preProduct: any) => ({
      ...preProduct,
      [name]: value,
    }));
  };
  //do select trả về chuỗi nên id trả về không chính xác cần hàm riêng để chuyển
  const handleGetCategoryOfProduct = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewProduct((preProduct: any) => ({
      ...preProduct,
      category_id: Number(e.target.value),
    }));
  };
  //do input quantity và price vẫn có thể để người dùng trả về string nên cần hàm riêng
  const numberToPirceAndQuantity = (e: any) => {
    let { value, name } = e.target;
    setNewProduct((preProduct: any) => ({
      ...preProduct,
      [name]: Number(value),
    }));
  };

  //nút thêm mới
  const hanleAddProduct = () => {
    if (
      newProduct.product_name === "" ||
      newProduct.description === "" ||
      newProduct.product_image === "" ||
      newProduct.category_id === 0
    ) {
      setValidateNew((pre: any) => ({ ...pre, empty: true }));
      return;
    } else if (newProduct.unit_price <= 0 || newProduct.stock_quantity <= 0) {
      setValidateNew((pre: any) => ({ ...pre, priceAndQuantityWrong: true }));
      return;
    }
    setImageUrl(null);
    setCheckAddForm(false);
    dispatch(addToProducts(newProduct));
  };

  //validate
  let [validateNew, setValidateNew] = useState<any>({
    empty: false,
    priceAndQuantityWrong: false,
  });
  // thêm mới product------------------------------------------------------

  // xóa product----------------------------------------------------------------------------------------
  let [idDelete, setIdDelete] = useState<number>(0);
  const handleDeleteProduct = (id: number) => {
    setIdDelete(id);
    setCheckDelete(true);
  };
  const confirmDelete = () => {
    dispatch(deleteAproduct(idDelete));
    setCheckDelete(false);
  };
  // xóa product----------------------------------------------------------------------------------------

  //cập nhật product ----------------------------------------------------------------------------
  //hàm update ảnh++++++++++++++++++++++++++++++++++
  let [imageUpdate, setImageUpdate] = useState<any>();
  let [imageUrlUpdate, setImageUrlUpdate] = useState<any>(null);
  let [updateProduct, setUpdateProduct] = useState<any>({
    id: 0,
    product_name: "",
    description: "",
    unit_price: 0,
    stock_quantity: 0,
    product_image: "",
    category_id: 0,
    created_at: "",
    updated_at: formatDate(new Date()),
  });

  const handleGetImgUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = e.target.files?.[0];
    setImageUpdate(value);
  };

  const uploadImgUpdate = () => {
    if (imageUpdate) {
      const imageRef = ref(storage, `products/updateImg/${imageUpdate.name}`);
      uploadBytes(imageRef, imageUpdate).then((snapShot) => {
        getDownloadURL(snapShot.ref).then((url) => {
          setImageUrlUpdate(url);
        });
      });
    }
  };
  useEffect(() => {
    if (imageUpdate) {
      uploadImgUpdate();
    }
  }, [imageUpdate]);

  useEffect(() => {
    if (imageUrlUpdate) {
      setUpdateProduct((prevProduct: any) => ({
        ...prevProduct,
        product_image: imageUrlUpdate,
      }));
    }
  }, [imageUrlUpdate]);

  //hàm update ảnh++++++++++++++++++++++++++++++++++

  //hàm lấy dữ liệu phần tử được click và hiện form.
  const handleGetAProduct = (id: number, cateId: number) => {
    let curProduct: Product | undefined = products.find((product: Product) => {
      return product.id === id;
    });
    if (curProduct) {
      setUpdateProduct((pre: any) => ({
        ...pre,
        id: curProduct.id,
        product_name: curProduct.product_name,
        description: curProduct.description,
        unit_price: curProduct.unit_price,
        stock_quantity: curProduct.stock_quantity,
        product_image: curProduct.product_image,
        category_id: curProduct.category_id,
        created_at: curProduct.created_at,
      }));
    } else {
      console.error("Product not found");
    }
    let categoryFound = categories.find(
      (category: Category) => category.id === cateId
    );
    if (categoryFound) {
      setCurCategory(categoryFound);
    }
    setCheckUpdateForm(true);
  };

  //hàm thay đổi input
  const handleChangeUpdate = (e: any) => {
    let { value, name } = e.target;
    setUpdateProduct((preProduct: any) => ({
      ...preProduct,
      [name]: value,
    }));
  };
  //do select trả về chuỗi nên id trả về không chính xác cần hàm riêng để chuyển
  const handleGetCategoryOfProductUpdated = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setUpdateProduct((preProduct: any) => ({
      ...preProduct,
      category_id: Number(e.target.value),
    }));
  };
  //do input quantity và price vẫn có thể để người dùng trả về string nên cần hàm riêng
  const numberToPirceAndQuantityUpdated = (e: any) => {
    let { value, name } = e.target;
    setUpdateProduct((preProduct: any) => ({
      ...preProduct,
      [name]: Number(value),
    }));
  };
  let [validateUp, setValidateUp] = useState<any>({
    empty: false,
    wrongPriceQuantity: false,
  });
  //hàm gọi dispatch thay đổi
  const handleUpdateProduct = () => {
    if (updateProduct.product_name === "" || updateProduct.description === "") {
      setValidateUp((pre: any) => ({ ...pre, empty: true }));
      return;
    } else if (
      updateProduct.unit_price <= 0 ||
      updateProduct.stock_quantity <= 0
    ) {
      setValidateUp((pre: any) => ({ ...pre, wrongPriceQuantity: true }));
      return;
    }

    setImageUrlUpdate(null);
    setCheckUpdateForm(false);
    dispatch(updateAproduct(updateProduct));
  };

  //cập nhật product ----------------------------------------------------------------------------

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
  //Phân trang--------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 5; // Số lượng user mỗi trang

  // Tính tổng số trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Lấy dữ liệu user cho trang hiện tại
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Xử lý khi nhấn vào nút chuyển trang
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <section className="rounded-md  bg-white py-4 shadow-default mt-24 px-5 border-spacing-2 border-stone-300 border-solid ">
        <div className=" font-semibold bg-indigo-500 px-5 pt-5 rounded-t-md text-white flex justify-between items-center py-5">
          <h2>Products Management</h2>
          <button
            className="
        border-none
        font-semibold
        text-sm
        leading-5
        rounded-[0.375rem]
        px-[10px]
        py-[6px]
      bg-indigo-800
        h-max 
        flex gap-1 items-center justify-center
        text-white
      "
            onClick={() => setCheckAddForm(true)}
          >
            <svg
              className="size-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>

            <p className="text-lg">New</p>
          </button>
        </div>
        {/* thanh tìm kiếm và số trang phân -----------------------------------*/}
        <div className="flex justify-between items-center border-b-2 border-stone-300 border-solid px-8 py-4 border-x-transparent border-t-transparent bg-indigo-600">
          <div className="w-3/5">
            <input
              type="text"
              className="w-full rounded-md border border-stone-300 border-solid px-5 py-3 outline-none focus:border-blue-500 dark:border-stone-300 text-base font-medium"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="flex items-center font-medium">
            <p className=" mr-2 pl-2 text-white dark:text-white">Sort By</p>
            <select
              onChange={sortProducts}
              className="bg-indigo-400 pl-2 border-none outline-none font-medium text-base text-stone-100"
            >
              <option className="text-black bg-slate-100" value={"default"}>
                Default
              </option>
              <option className="text-black bg-slate-100" value={"upToDown"}>
                Price Up-Down
              </option>
              <option className="text-black bg-slate-100" value={"downToUp"}>
                Price Down-Up
              </option>
            </select>
          </div>
          <div className="flex items-center font-medium">
            <select className="bg-transparent pl-2 border-none outline-none font-medium text-base text-stone-100">
              <option className="text-black" value={5}>
                5
              </option>
              <option className="text-black" value={10}>
                10
              </option>
              <option className="text-black" value={20}>
                20
              </option>
              <option className="text-black" value={50}>
                50
              </option>
            </select>
            <p className="pl-2 text-white dark:text-white">Entries Per Page</p>
          </div>
        </div>
        {/* thanh tìm kiếm và số trang phân -------------------------------------*/}

        {/* bảng */}
        <table className="w-full border-y-stone-300 border-2 border-solid border-x-transparent">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th
                scope="col"
                className="text-xl font-medium text-gray-900 px-6 py-4 text-left w-5"
              >
                #
              </th>
              <th
                scope="col"
                className=" font-medium text-gray-900 px-6 py-4 text-left"
              >
                Product's name
              </th>

              <th
                scope="col"
                className=" font-medium text-gray-900 px-6 py-4 text-left"
              >
                Description
              </th>
              <th
                scope="col"
                className=" font-medium text-gray-900 px-6 py-4 text-left"
              >
                Price
              </th>
              <th
                scope="col"
                className=" font-medium text-gray-900 px-6 py-4 text-left"
              >
                Quantity
              </th>
              <th
                scope="col"
                className=" font-medium text-gray-900 px-6 py-4 text-left"
              >
                Created
              </th>
              <th
                scope="col"
                className=" font-medium text-gray-900 px-6 py-4 text-left"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product: Product, index: number) => {
              return (
                <tr
                  className={`${
                    (index + 1) % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b`}
                  key={product.id}
                >
                  <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className=" text-gray-900 p-4 whitespace-nowrap">
                    {product.product_name}
                  </td>
                  <td className=" text-gray-900   p-4 max-w-[500px] truncate">
                    {product.description}
                  </td>
                  <td className=" text-gray-900  p-4 flex-nowrap ">
                    $ {product.unit_price}
                  </td>
                  <td className=" text-gray-900 p-4 text-center">
                    {product.stock_quantity}
                  </td>
                  <td className=" text-gray-900 p-4 ">{product.updated_at}</td>

                  <td className=" text-gray-900  px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() =>
                        handleGetAProduct(product.id, product.category_id)
                      }
                      className="
                border-2
                border-indigo-400
                border-solid
                rounded-2xl
                bg-transparent
                h-max
                mr-2
                px-3
                py-1
                hover:text-white
                hover:bg-indigo-100
              "
                    >
                      <svg
                        className="h-4 w-4 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="
                border-2
                border-red-400
                border-solid
                rounded-3xl
                bg-transparent
                h-max
     
                px-3
                py-1
                hover:text-white
                hover:bg-red-100
              "
                    >
                      <svg
                        className="h-4 w-4 text-red-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <polyline points="3 6 5 6 21 6" />{" "}
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
                        <line x1="10" y1="11" x2="10" y2="17" />{" "}
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* footer --------------------------------------------------------------*/}
        <div className="flex justify-between px-8 pt-5">
          <p className="font-medium text-gray-600">
            Showing {currentPage} of {totalPages} pages
          </p>
          <div className="flex">
            {/* Nút "Previous" */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white border-transparent font-medium text-base"
              disabled={currentPage === 1} // Vô hiệu hóa nếu là trang đầu tiên
            >
              <svg
                className="fill-current"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                  fill=""
                />
              </svg>
            </button>

            {/* Các nút số trang */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ${
                  currentPage === index + 1 ? "bg-indigo-500 text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Nút "Next" */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium"
              disabled={currentPage === totalPages} // Vô hiệu hóa nếu là trang cuối cùng
            >
              <svg
                className="fill-current"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* add form */}
      {checkAddForm && (
        <div className="addModal">
          <div className=" bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 w-1/2 dark:bg-gray-800 dark:border-gray-700">
            {/* close */}
            <p
              className="float-right p-4"
              onClick={() => {
                setCheckAddForm(false);
                setImageUrl(null);
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
                add a new product
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                    Product's name
                  </label>
                  <input
                    onChange={handleCreateProduct}
                    name="product_name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="Name of product..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-3">
                  <div className="row-span-2">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <textarea
                      name="description"
                      onChange={handleCreateProduct}
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 outline-none h-[90%]"
                      placeholder="Write some description...."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Price
                      </label>
                      <div className="flex gap-1">
                        <input
                          onChange={numberToPirceAndQuantity}
                          min={0}
                          name="unit_price"
                          type="number"
                          className="bg-gray-50 border border-gray-300 border-solid text-green-600 rounded-lg  focus:border-blue-600 block w-full p-2.5 text-center font-semibold "
                        />
                        <p className="text-2xl font-bold text-green-400">$</p>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Quantity
                      </label>
                      <input
                        onChange={numberToPirceAndQuantity}
                        min={0}
                        name="stock_quantity"
                        type="number"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 text-center font-semibold "
                      />
                    </div>

                    <div className="col-span-3 ">
                      <div className="file-upload-wrapper mt-3 flex gap-2 ">
                        <div>
                          <label
                            htmlFor="file-upload"
                            className=" bg-indigo-500 font-medium text-sm text-white py-1 px-3 rounded cursor-pointer"
                          >
                            Add image
                          </label>
                          <input
                            id="file-upload"
                            onChange={handleGetImg}
                            type="file"
                            className="hidden"
                          />
                        </div>

                        <img
                          src={newProduct.product_image}
                          alt=""
                          className="w-52 h-28  rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <select
                  onChange={handleGetCategoryOfProduct}
                  defaultValue={0}
                  className="w-full border-stone-200 border-solid border-2 p-1 text-center rounded font-medium"
                >
                  <option value={0}>Choose A Categories</option>
                  {categories.map((category: Category) => {
                    return (
                      <option value={category.id} key={category.id}>
                        {category.category_name}
                      </option>
                    );
                  })}
                </select>
                {validateNew.empty && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                    Fields cannot be empty !
                  </p>
                )}
                {validateNew.priceAndQuantityWrong && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                    Price and quantity need to be greater than 0 !
                  </p>
                )}

                <button
                  onClick={hanleAddProduct}
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:bg-indigo-500 font-medium rounded-lg  px-5 py-2.5 text-center border-transparent"
                >
                  ADD NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* update form */}
      {checkUpdateForm && (
        <div className="addModal">
          <div className=" bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 w-1/2 dark:bg-gray-800 dark:border-gray-700">
            {/* close */}
            <p
              className="float-right p-4"
              onClick={() => {
                setCheckUpdateForm(false);
                setImageUrlUpdate(null);
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
                update a product
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                    Product's name
                  </label>
                  <input
                    onChange={handleChangeUpdate}
                    value={updateProduct.product_name}
                    name="product_name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="Name of product..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-3">
                  <div className="row-span-2">
                    <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <textarea
                      name="description"
                      onChange={handleChangeUpdate}
                      value={updateProduct.description}
                      className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 outline-none h-[90%]"
                      placeholder="Write some description...."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Price
                      </label>
                      <div className="flex gap-1">
                        <input
                          onChange={numberToPirceAndQuantityUpdated}
                          min={0}
                          value={updateProduct.unit_price}
                          name="unit_price"
                          type="number"
                          className="bg-gray-50 border border-gray-300 border-solid text-green-600 rounded-lg  focus:border-blue-600 block w-full p-2.5 text-center font-semibold "
                        />
                        <p className="text-2xl font-bold text-green-400">$</p>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                        Quantity
                      </label>
                      <input
                        onChange={numberToPirceAndQuantityUpdated}
                        min={0}
                        value={updateProduct.stock_quantity}
                        name="stock_quantity"
                        type="number"
                        className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 text-center font-semibold "
                      />
                    </div>

                    <div className="col-span-3 ">
                      <div className="file-upload-wrapper mt-3 flex gap-2 ">
                        <div>
                          <label
                            htmlFor="file-upload"
                            className=" bg-green-500 font-medium text-sm text-white py-1 px-3 rounded cursor-pointer"
                          >
                            Change Image
                          </label>
                          <input
                            id="file-upload"
                            onChange={handleGetImgUpdate}
                            type="file"
                            className="hidden"
                          />
                        </div>

                        <img
                          src={updateProduct.product_image}
                          alt=""
                          className="w-52 h-28  rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <select
                  onChange={handleGetCategoryOfProductUpdated}
                  defaultValue={updateProduct.category_id}
                  className="w-full border-stone-200 border-solid border-2 p-1 text-center rounded font-medium"
                >
                  <option value={updateProduct.category_id}>
                    {curCategory.category_name}
                  </option>
                  {categories.map((category: Category) => {
                    return (
                      <option value={category.id} key={category.id}>
                        {category.category_name}
                      </option>
                    );
                  })}
                </select>
                {validateUp.empty && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                    Fields cannot be empty !
                  </p>
                )}
                {validateUp.wrongPriceQuantity && (
                  <p className="text-red-500 font-medium text-sm bg-red-100 px-2">
                    Price and quantity need to be greater than 0 !
                  </p>
                )}

                <button
                  onClick={handleUpdateProduct}
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:bg-green-500 font-medium rounded-lg  px-5 py-2.5 text-center border-transparent"
                >
                  UPDATE
                </button>
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
      {/* success modal */}
      {checkSucccess && (
        <div
          className={`relative ${checkSucccess ? "z-10" : "z-[-1]"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => setCheckSuccess(false)}
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              checkSucccess
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0"
            } `}
          ></div>

          <div
            className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
              checkSucccess
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0 "
            }`}
          >
            <div
              className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0  ${
                checkSucccess
                  ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                  : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
              }`}
            >
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-96">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="sm:flex flex-col gap-4 sm:items-center">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                      <h3
                        className="text-base text-center font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Successful
                      </h3>
                      <div className="mt-2">
                        <p className=" text-gray-500 text-center">
                          Are you sure you want to delete? All of your data will
                          be permanently removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
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
