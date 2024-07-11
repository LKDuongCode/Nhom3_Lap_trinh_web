import React from "react";
import BannerUS from "../../../components/usersCpn/homeCpn/BannerUS";
import FeaturesHomeUS from "../../../components/usersCpn/homeCpn/FeaturesHomeUS";
import CategoriesHomeUS from "../../../components/usersCpn/homeCpn/CategoriesHomeUS";
import TopNewHomeUS from "../../../components/usersCpn/homeCpn/TopNewHomeUS";
import RecomendedUS from "../../../components/usersCpn/homeCpn/RecomendedUS";

export default function Homepages() {
  return (
    <div>
      <BannerUS></BannerUS>
      <FeaturesHomeUS></FeaturesHomeUS>
      <CategoriesHomeUS></CategoriesHomeUS>
      <TopNewHomeUS></TopNewHomeUS>
      <div className="container pb-16 px-5">
        <a href="#">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/Screenshot%202024-07-04%20100401.png?alt=media&token=838dca97-c3fb-480d-9872-27177ac90ff3"
            alt="ads"
            className="w-full max-h-96"
          />
        </a>
      </div>
      <RecomendedUS></RecomendedUS>
    </div>
  );
}
