import { useDispatch, useSelector } from "react-redux";
import { Category } from "../../../interface/categoriesType";
import { CombineType } from "../../../interface/combineType";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchCategories } from "../../../services/categories/getCategories.service";
import { useNavigate } from "react-router-dom";
import { searchCategoriesByName } from "../../../services/categories/searchByName.service";

export default function CategoriesUS() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // lấy dữ liệu redux--------------------------------------------
  let categories: Category[] = useSelector((state: CombineType) => {
    return state.categories.data;
  });
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // lấy dữ liệu redux-------------------------------------------------
  //sắp xếp--------------------------------------------------------------

  //tìm kiếm------------------------------------------------------------
  let [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      dispatch(fetchCategories());
    } else if (searchTerm !== "") {
      dispatch(searchCategoriesByName(searchTerm));
    }
  }, [searchTerm]);
  //tìm kiếm------------------------------------------------------------

  //hàm điều hướng
  const handleNavigate = (category: Category) => {
    navigate(`/productsList?${category.id}`, { state: category.id });
  };
  return (
    <div className="container py-16">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold text-indigo-100 uppercase mb-6 ml-5 py-8 px-10 w-1/3 bg-[#1F2937] rounded-e-full">
          all categories
        </h2>
        <input
          type="text"
          className="w-1/3 rounded-md border border-stone-300 border-solid px-5 py-3 outline-none focus:border-blue-500 dark:border-stone-300 text-base font-medium h-max"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-4 gap-3 px-5">
        {categories.map((category: Category) => {
          return (
            <div
              className="relative rounded-md overflow-hidden group"
              key={category.id}
              onClick={() => handleNavigate(category)}
            >
              <img
                src={category.category_img}
                alt="category 1"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition cursor-pointer uppercase">
                {category.category_name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
