import React from "react";
import Navbar from "./navbar";
import "./App.css";
import Categories from "./categories";
import MultiPoster from "./multi-poster";
import Bestselling from "./best-selling";
import CollageStore from "./section1";
import SliderEndCarousel from "./section2";
import CustomPosterHero from "./section3";
import PosterGallery from "./section4";
import FAQSection from "./faq";
import Footer from "./lastsection5";



function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <MultiPoster />
      <Bestselling />
      <CollageStore />
      <SliderEndCarousel />
     <CustomPosterHero />
     <PosterGallery />
     <FAQSection />
     <Footer />
    </>
  );
}

export default App;
