import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products.jsx";
import Home from "./Components/Home/Home";
import BannerCarousel from "./Components/BannerCarousel/BannerCarousel.jsx";
import { CarouselData } from "./Components/Datas.js";
import Footer from "./Components/Footer/Footer.js";
import Navbar from "./Components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <BannerCarousel data={CarouselData} />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
