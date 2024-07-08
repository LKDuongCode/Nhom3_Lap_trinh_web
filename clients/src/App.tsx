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

export default function App() {
  return (
    <div>
      <Routes>
        {/* login và sign up------------------------------------------------------------------------ */}
        <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/usersLogin"></Route>
        <Route path="/usersRegister"></Route>
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
        </Route>
        {/* admin router----------------------------------------------------------------------------- */}

        {/* users router----------------------------------------------------------------------------- */}
        <Route path="">
          <Route index></Route>
          <Route path="categories"></Route>
          <Route path="productsList"></Route>
          <Route path="productDetail"></Route>

          <Route path="bills"></Route>
          <Route path="carts"></Route>
          <Route path="supports"></Route>
          <Route path="aboutus"></Route>
        </Route>
        {/* users router----------------------------------------------------------------------------- */}

        {/* not found page */}
        <Route path="*"></Route>
      </Routes>
    </div>
  );
}
