import React from "react";
import aboutBoxImage from "./assets/about-box.svg";
import Header from "../header/Header";

const Sponsors = () => {
  return (
    <>
      <Header
        TitleTextTop="Meet our"
        TitleTextBottom="sponsors"
        TitleColor="#D8F029"
        ImageURL={aboutBoxImage}
        Opposite="false"
      />
    </>
  );
};

export default Sponsors;
