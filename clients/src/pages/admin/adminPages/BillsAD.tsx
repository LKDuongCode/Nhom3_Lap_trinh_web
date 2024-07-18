import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchBills } from "../../../services/bills/getBills.service";
import { CombineType } from "../../../interface/combineType";
import { Bill } from "../../../interface/billsType";

export default function () {
  //lấy redux
  let bills = useSelector((state: CombineType) => state.bills.data);
  useEffect(() => {
    dispatch(fetchBills());
  }, []);
  return (
    <div className="my-40  ">
      <h2 className="text-3xl font-bold text-indigo-100 uppercase mb-6 ml-5 py-4 px-10 w-2/3 bg-[#1F2937] rounded-e-full">
        Your Bills
      </h2>
      <div className="flex flex-col gap-5 mx-40">
        {bills.map((bill: Bill) => {
          return (
            <div
              className="bg-white shadow-md p-5 rounded cursor-pointer"
              // onClick={() => navigate("/billInfo", { state: bill })}
              key={bill.id}
            >
              <h2>Bill id : {bill.id}</h2>
              <div className="flex justify-between font-medium mt-5">
                <p>
                  {bill.full_name} | {bill.address} - {bill.detailAddress}
                </p>
                <p>{bill.created_at}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
