import React, { useEffect, useState } from "react";
import Products from "../Products";

const Home = () => {
  return (
    <div className="home-page-main-wrapper" style={{paddingTop: "60px"}}>
      <Products />
    </div>
  );
};

export default Home;
