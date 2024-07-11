import { useDispatch, useSelector } from "react-redux";
import { Category } from "../../../interface/categoriesType";
import { CombineType } from "../../../interface/combineType";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../services/categories/getCategories.service";

export default function CategoriesHomeUS() {
  // lấy dữ liệu redux--------------------------------------------
  let dispatch = useDispatch();
  let categories: Category[] = useSelector((state: CombineType) => {
    return state.categories.data;
  });
  // chỉ lấy ba đối tượng
  let [randomCategories, setRandomCategories] = useState<Category[]>([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    let selected = categories.slice(0, 3);
    setRandomCategories(selected);
  }, [categories]);

  // lấy dữ liệu redux-------------------------------------------------
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-semibold text-gray-800 uppercase mb-6 ml-5">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3 px-5">
        {randomCategories.map((category: Category) => {
          return (
            <div
              className="relative rounded-md overflow-hidden group "
              key={category.id}
            >
              <img
                src={category.category_img}
                className="w-full h-full rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition cursor-pointer">
                {category.category_name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
