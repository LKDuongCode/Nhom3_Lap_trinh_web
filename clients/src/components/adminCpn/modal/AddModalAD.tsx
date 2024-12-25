import React from "react";
import "../../../../components/modal/scss/addModal.scss";
export default function AddModalAD() {
  return (
    <div className="addModal">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        {/* close */}
        <p className="float-right p-4">
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
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                placeholder="name@company.com"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:bg-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-transparent"
            >
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
