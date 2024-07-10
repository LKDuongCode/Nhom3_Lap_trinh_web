export default function DetailProducts() {
  return (
    <div className="mx-5 mt-7">
      <div className="grid grid-cols-4 grid-rows-2  gap-5">
        <div className=" row-span-2 rounded-lg p-5 bg-white shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdhhLju_Z7p2DyO9GrzKh7ZfW-e-lS9KBGg&s"
            alt=""
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className=" bg-white shadow-lg rounded-lg px-5 col-span-2 flex gap-3 flex-col ">
          <h2>Samsung promax hz4000</h2>
          <p>Quantity remaining in stock</p>
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
            <h1 className="text-indigo-600">Price : 3000$</h1>
            <div className="flex gap-2 items-center">
              <button
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
              </button>
              <button
                className="
                   hover:text-white hover:bg-indigo-400 border-2 border-solid border-indigo-600 font-semibold hover:border-indigo-500
          text-sm bg-white
          text-indigo-600
          leading-5
          rounded-full
          flex justify-center
          items-center
          h-max 
          p-1
        "
              >
                <svg
                  className="size-8 "
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
              </button>
            </div>
          </div>
        </div>
        <div className="row-span-2 rounded-lg p-5 bg-white shadow-lg flex flex-col gap-5 justify-center ">
          <h2 className="uppercase">more detail</h2>
          <div className="flex gap-5 h-8 items-center">
            <p className="font-medium">Quantity</p>
            <input
              type="number"
              className="text-base text-center py-2 h-8 border-2 border-solid border-stone-400 w-16"
            />
          </div>
          <h4>Temporary amount </h4>
          <h2>3000$</h2>
          <button
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
            Buy now
          </button>
        </div>
        <div className=" bg-white shadow-lg rounded-lg p-5 col-span-2 flex gap-3 flex-col">
          <div className="flex gap-1 items-center">
            <p className="border-2 border-solid border-indigo-500 px-4 flex justify-center items-center">
              <svg
                className="h-8 w-8 text-indigo-500 "
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
                <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />{" "}
                <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />{" "}
                <line x1="3" y1="9" x2="7" y2="9" />
              </svg>
            </p>
            <h3 className="p-2 px-5 bg-indigo-500 text-white rounded-e-full font-medium">
              Shipping information
            </h3>
          </div>
          <p>to New York City</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            non fuga, repudiandae sint voluptatem perspiciatis minima, excepturi
            impedit error perferendis laborum et consequatur deleniti eos minus
            sunt maxime tempora quos.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-md my-5 p-4 flex flex-col gap-5">
        <h3 className="p-4 text-white bg-indigo-500 w-1/2 rounded-e-full rounded-s-md">
          Same Products
        </h3>
        <div className="grid grid-cols-5 gap-5">
          <div>
            <img
              src="https://thegadgetflow.com/wp-content/uploads/2023/02/Must-have-tech-gadgets-of-2023-you-need-to-try-soon-blog-featured.jpeg"
              alt=""
              className="rounded-md w-full h-full"
            />
          </div>
          <div>
            <img
              src="https://thegadgetflow.com/wp-content/uploads/2023/02/Must-have-tech-gadgets-of-2023-you-need-to-try-soon-blog-featured.jpeg"
              alt=""
              className="rounded-md w-full h-full"
            />
          </div>
          <div>
            <img
              src="https://thegadgetflow.com/wp-content/uploads/2023/02/Must-have-tech-gadgets-of-2023-you-need-to-try-soon-blog-featured.jpeg"
              alt=""
              className="rounded-md w-full h-full"
            />
          </div>
          <div>
            <img
              src="https://thegadgetflow.com/wp-content/uploads/2023/02/Must-have-tech-gadgets-of-2023-you-need-to-try-soon-blog-featured.jpeg"
              alt=""
              className="rounded-md w-full h-full"
            />
          </div>
          <div>
            <img
              src="https://thegadgetflow.com/wp-content/uploads/2023/02/Must-have-tech-gadgets-of-2023-you-need-to-try-soon-blog-featured.jpeg"
              alt=""
              className="rounded-md w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
