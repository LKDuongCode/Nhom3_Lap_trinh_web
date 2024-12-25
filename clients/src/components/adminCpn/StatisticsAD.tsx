import React, { useEffect, useState } from "react";
import { User } from "../../interface/usersType";
import { CombineType } from "../../interface/combineType";
import { fetchUsers } from "../../services/users/getUsers.service";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../services/products/getProducts.service";
import { Product } from "../../interface/productsType";
import { Link } from "react-router-dom";
import { Bill } from "../../interface/billsType";
import { fetchBills } from "../../services/bills/getBills.service";

export default function StatisticsAD() {
  //lấy dữ liệu từ redux-------------------------------------------------
  let dispatch = useDispatch();
  let users: User[] = useSelector((state: CombineType) => {
    return state.users.data;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  let products: Product[] = useSelector((state: CombineType) => {
    return state.products.data;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  let bills: Bill[] = useSelector((state: CombineType) => {
    return state.bills.data;
  });
  useEffect(() => {
    dispatch(fetchBills());
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    bills.forEach((bill) => {
      const price = Number(bill.total_price);
      total += price;
    });
    setTotalPrice(total);
  }, [bills]);

  //lấy dữ liệu từ redux------------------------------------------------

  let [topUser, setTopUser] = useState<User[]>([]);
  useEffect(() => {
    let arr = users.slice(0, 5);
    setTopUser(arr);
  }, [users]);

  return (
    <>
      <div className=" ml-4 grid grid-cols-[1fr,1fr,1fr,2fr]  mt-4 gap-2 p-5 grid-rows-[1fr 1fr] grid-flow-row ">
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Profit</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
            <h2>{totalPrice} $</h2>
          </div>
        </div>
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Users</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </p>
            <h2>{users.length}</h2>
          </div>
        </div>
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Products</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </p>
            <h2>{products.length}</h2>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg row-span-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  username
                </th>
                <th scope="col" className="px-6 py-3">
                  created
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
              </tr>
            </thead>
            <tbody>
              {topUser.map((user: User, index: number) => {
                return (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{user.user_name}</td>
                    <td className="px-6 py-4">{user.created_at}</td>
                    <td className="px-6 py-4 truncate">{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="shadow-md col-span-3 bg-[url('https://www.technocrazed.com/wp-content/uploads/2015/12/HD-purple-wallpaper-image-to-use-as-background-121.jpg')] p-5 rounded-b-lg flex flex-col gap-4 bg-cover">
          <h1 className="text-white">Attention Notices</h1>
          <p className="text-white">
            Includes the latest information about updated versions,
            corrections,...
          </p>
          <div>
            <Link
              to={"/terms"}
              className="
    
            font-semibold
            text-sm
            leading-5
            rounded-[0.375rem]
            px-[32px]
            py-[6px]
          bg-[#24006C]
          text-white
          border-[#484BFC]
          hover:bg-[#484BFC]
          border-solid
            h-max 
            w-max
            float-right
          "
            >
              Go to about us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
