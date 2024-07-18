import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PayInfo() {
  const location = useLocation();
  let infoBill = location.state;

  let tax: number = 25;

  return (
    <>
      <Link
        className="flex items-center gap-2  absolute top-48 left-40 "
        to={"/"}
      >
        <svg
          className="h-10 w-10 text-indigo-500 p-1 bg-indigo-300 rounded-full hover:text-indigo-100 hover:bg-indigo-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />{" "}
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="font-semibold text-lg text-indigo-500">Go Home</span>
      </Link>
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto my-28">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              className="size-10 bg-purple-100 rounded-full mr-2"
              src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
              alt="Logo"
            />
            <div className="text-gray-700 font-semibold text-lg">
              Duong's Shop
            </div>
          </div>
          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">Date: {infoBill.created_at}</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
          <p className="text-gray-700 mb-2">{infoBill.full_name}</p>
          <p className="text-gray-700 mb-2">{infoBill.address}</p>
          <p className="text-gray-700 mb-2">{infoBill.detailAdress}</p>
          <p className="text-gray-700">{infoBill.email}</p>
        </div>
        <hr />
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">
                Product Name
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">
                Quantity
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">Price</th>
              <th className="text-gray-700 font-bold uppercase py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {infoBill.productIn.map((info: any, index: number) => {
              return (
                <tr key={index}>
                  <td className="py-4 text-gray-700">{info.name}</td>
                  <td className="py-4 text-gray-700">
                    {info.totalTemp / info.price}
                  </td>
                  <td className="py-4 text-gray-700">$ {info.price}</td>
                  <td className="py-4 text-gray-700">$ {info.totalTemp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <br />
        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Subtotal:</div>
          <div className="text-gray-700">{infoBill.total_price}</div>
        </div>
        <div className="text-right mb-8">
          <div className="text-gray-700 mr-2">Tax:</div>
          <div className="text-gray-700">$ {tax}</div>
        </div>
        <div className="flex justify-end mb-8 items-center">
          <div className="text-gray-700 mr-2">Total:</div>
          <div className="text-green-700 font-bold text-xl">
            $ {tax + infoBill.total_price}
          </div>
        </div>
        <div className="border-t-2 border-gray-300 ">
          <div className="text-gray-700">
            Payment is due within 30 days. Late payments are subject to fees.
          </div>
        </div>
      </div>
    </>
  );
}
