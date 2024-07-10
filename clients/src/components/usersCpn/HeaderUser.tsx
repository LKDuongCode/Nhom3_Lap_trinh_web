import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderUser() {
  const navigate = useNavigate();
  //fix nav khi cuộn đến vị trí nhất định
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const sticky = navbar.offsetTop;
        if (window.pageYOffset > sticky) {
          navbar.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "shadow-lg",
            "z-10"
          );
        } else {
          navbar.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "shadow-lg"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" w-full z-50 bg-[#F1F5F9]">
      <nav className="bg-gray-800 fixed w-full px-4" id="navbar">
        <div className="container flex justify-between w-full">
          <div className="flex">
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden hover:bg-indigo-500">
              <span className="text-white">
                <i className="fa-solid fa-bars" />
              </span>
              <span className="capitalize ml-2 text-white hidden">
                All Categories
              </span>
              {/* dropdown */}
              <div className="absolute w-52 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a
                  className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5"
                  onClick={() => navigate("/supports")}
                >
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    />{" "}
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Supports
                  </span>
                </a>
                <a
                  className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5"
                  onClick={() => navigate("aboutus")}
                >
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    />{" "}
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    About Us
                  </span>
                </a>
                <a className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5">
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    />{" "}
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Feelback
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 h-full">
              <div
                className="flex items-center space-x-6 capitalize hover:bg-indigo-500 h-full px-6"
                onClick={() => navigate("/")}
              >
                <div className="text-gray-200 transition font-semibold text-lg ">
                  Home
                </div>
              </div>
              <div
                className="flex items-center space-x-6 capitalize hover:bg-indigo-500 h-full px-6"
                onClick={() => navigate("categories")}
              >
                <div className="text-gray-200 transition font-semibold text-lg ">
                  Shop
                </div>
              </div>
              <div
                className="flex items-center space-x-6 capitalize hover:bg-indigo-500 h-full px-6"
                onClick={() => navigate("bills")}
              >
                <div className="text-gray-200 transition font-semibold text-lg ">
                  Bills
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 ">
            <a
              href="#"
              className="text-center text-white hover:text-indigo-400 transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-heart" />
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-indigo-500 text-white text-xs">
                8
              </div>
            </a>
            <a
              onClick={() => navigate("/carts")}
              className="text-center text-white hover:text-indigo-400 transition relative"
            >
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping" />
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-indigo-500 text-white text-xs">
                2
              </div>
            </a>
            <div className=" py-4 bg-primary md:flex items-center cursor-pointer relative group hidden ">
              <div className="text-white flex-col items-center justify-center hover:text-indigo-400 transition">
                <div className="text-xl pl-3">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="text-xs ">Account</div>
              </div>
              {/* dropdown */}
              <div className="absolute w-52 -left-32 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <div className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-1">
                  <Link
                    className=" text-gray-600 text-md font-medium"
                    to={"/usersLogin"}
                  >
                    Login /
                  </Link>
                  <Link
                    className=" text-gray-600 text-md font-medium"
                    to={"/usersRegister"}
                  >
                    Sign-up
                  </Link>
                </div>
                <a className="flex items-center px-5 py-2 hover:bg-gray-100 transition gap-5">
                  <svg
                    className="size-8 text-indigo-500"
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
                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                    <line x1="13" y1="8" x2="15" y2="8" />{" "}
                    <line x1="13" y1="12" x2="15" y2="12" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Profile
                  </span>
                </a>
                <a className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5">
                  <svg
                    className="h-6 w-6 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Inbox
                  </span>
                </a>
                <Link
                  className="flex items-center px-6 py-2 hover:bg-gray-100 transition gap-5"
                  to={"/usersLogin"}
                >
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
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className=" text-gray-600 text-md font-medium">
                    Log-out
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="py-4 shadow-sm ">
        <div className="container flex items-center justify-between gap-40">
          <a
            href="http://localhost:5173/"
            className="flex gap-2 items-center bg-black py-2 px-5 rounded-e-md max-w-56"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
              alt="Logo"
              className="size-12 bg-purple-300 rounded-full"
            />
            <p className="font-extrabold text-white text-2xl">DUONG'S SHOP</p>
          </a>
          <div className="flex w-full ">
            <div className="w-full max-w-3xl relative flex flex-3 ">
              <span className="absolute left-4 top-4 text-lg text-indigo-500">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full border-stone-200 border-solid border-b-transparent   pl-12 py-4 pr-3 rounded-l-md focus:outline-none hidden md:flex text-base"
                placeholder="Search something ..."
              />
              <button className="bg-indigo-600 border-solid border-indigo-500 text-white px-8 rounded-r-md hover:bg-transparent hover:text-indigo-600 transition  flex justify-center items-center text-base font-medium">
                <p>Search</p>
              </button>
            </div>
          </div>
          <a
            href="http://localhost:5173/"
            className="flex gap-2 items-center bg-black py-2 px-7 rounded-s-md max-w-56"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
              alt="Logo"
              className="size-12 bg-purple-300 rounded-full"
            />
            <p className="font-extrabold text-white text-2xl"> SALE 30%</p>
          </a>
        </div>
      </header>
      {/* navbar */}
    </div>
  );
}
