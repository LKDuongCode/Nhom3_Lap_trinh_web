import { Outlet } from "react-router-dom";
import HeaderUser from "../../components/usersCpn/HeaderUser";
import FooterUser from "../../components/usersCpn/FooterUser";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
export default function UsersHome() {
  return (
    <>
      <HeaderUser></HeaderUser>

      {/* outlet---------------------------------- */}
      <div className="mt-10">
        <Outlet></Outlet>
      </div>
      {/* outlet---------------------------------- */}

      <FooterUser></FooterUser>
    </>
  );
}
