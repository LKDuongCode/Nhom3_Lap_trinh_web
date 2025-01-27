import { Route, Routes } from "react-router-dom";

import AdminHome from "./pages/admin/AdminHome";
import DashBoardAD from "./pages/admin/adminPages/DashBoardAD";
import CaledarAD from "./pages/admin/adminPages/CaledarAD";
import UsersManage from "./pages/admin/adminPages/UsersManage";
import CategoriesManage from "./pages/admin/adminPages/CategoriesManage";
import ProductsManage from "./pages/admin/adminPages/ProductsManage";
import DetailAccount from "./pages/admin/adminPages/DetailAccount";
import BillsAD from "./pages/admin/adminPages/BillsAD";
import AdminLogin from "./pages/admin/adminPages/AdminLogin";
import NotFoundPage from "./pages/NotFoundPage";
import UsersLogin from "./pages/users/UsersLogin";
import UsersRegister from "./pages/users/UsersRegister";
import UsersHome from "./pages/users/UsersHome";
import CategoriesUS from "./pages/users/usersPages/CategoriesUS";
import ProductList from "./pages/users/usersPages/ProductList";
import DetailProducts from "./pages/users/usersPages/DetailProducts";
import Bills from "./pages/users/usersPages/Bills";
import CartsUS from "./pages/users/usersPages/CartsUS";
import AboutUS from "./pages/users/usersPages/AboutUS";
import SupportUS from "./pages/users/usersPages/SupportUS";
import Homepages from "./pages/users/usersPages/Homepages";
import WishList from "./pages/users/usersPages/WishList";
import UserProfile from "./pages/users/usersPages/UserProfile";
import PayInfo from "./pages/users/usersPages/PayInfo";
import BillInfo from "./pages/users/usersPages/BillInfo";
import PoliciesAndTerms from "./pages/PoliciesAndTerms";
import OtherAcc from "./pages/admin/adminPages/OtherAcc";
import BillInfoAdmin from "./pages/admin/adminPages/BillInfoAdmin";

export default function App() {
  return (
    <div>
      <Routes>
        {/* login và sign up------------------------------------------------------------------------ */}
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/usersLogin" element={<UsersLogin></UsersLogin>}></Route>
        <Route
          path="/usersRegister"
          element={<UsersRegister></UsersRegister>}
        ></Route>
        {/* login và sign up------------------------------------------------------------------------ */}

        {/* admin router----------------------------------------------------------------------------- */}
        <Route path="/adminHome" element={<AdminHome></AdminHome>}>
          <Route index element={<DashBoardAD></DashBoardAD>}></Route>
          <Route path="calendar" element={<CaledarAD></CaledarAD>}></Route>
          <Route
            path="adminUsersManage"
            element={<UsersManage></UsersManage>}
          ></Route>
          <Route
            path="adminCategoriesManage"
            element={<CategoriesManage></CategoriesManage>}
          ></Route>
          <Route
            path="adminProductsManage"
            element={<ProductsManage></ProductsManage>}
          ></Route>
          <Route
            path="detailAcc"
            element={<DetailAccount></DetailAccount>}
          ></Route>
          <Route path="adminBillsManage" element={<BillsAD></BillsAD>}></Route>
          <Route
            path="billInfoAdmin"
            element={<BillInfoAdmin></BillInfoAdmin>}
          ></Route>
          <Route path="otherAccChecked" element={<OtherAcc></OtherAcc>}></Route>
        </Route>
        {/* admin router----------------------------------------------------------------------------- */}

        {/* users router----------------------------------------------------------------------------- */}
        <Route path="" element={<UsersHome></UsersHome>}>
          <Route index element={<Homepages></Homepages>}></Route>
          <Route
            path="categories"
            element={<CategoriesUS></CategoriesUS>}
          ></Route>
          <Route
            path="productsList"
            element={<ProductList></ProductList>}
          ></Route>
          <Route
            path="productDetail"
            element={<DetailProducts></DetailProducts>}
          ></Route>

          <Route path="bills" element={<Bills></Bills>}></Route>
          <Route path="billInfo" element={<BillInfo></BillInfo>}></Route>
          <Route path="wishList" element={<WishList></WishList>}></Route>
          <Route path="carts" element={<CartsUS></CartsUS>}></Route>
          <Route path="supports" element={<SupportUS></SupportUS>}></Route>
          <Route path="aboutus" element={<AboutUS></AboutUS>}></Route>
          <Route path="profile" element={<UserProfile></UserProfile>}></Route>
          <Route path="payInfo" element={<PayInfo></PayInfo>}></Route>
        </Route>
        {/* users router----------------------------------------------------------------------------- */}

        {/* not found page and other */}

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route
          path="terms"
          element={<PoliciesAndTerms></PoliciesAndTerms>}
        ></Route>
      </Routes>
    </div>
  );
}
