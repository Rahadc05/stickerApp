import React from "react";
import "./section2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const products = [
  { id: 1, title: "50 Epic Trippy Aesthetic Collage Set", price: 289, image: "Harvey_Specter.webp" },
  { id: 3, title: "50 Epic The Starry Night Collage Set", price: 389, image: "SUIT.webp" },
  { id: 4, title: "50 Epic DC Cinematic Universe Collage Set", price: 689, image: "canvas1.webp" },
  { id: 5, title: "50 Epic Marvel Universe Collage Set", price: 579, image: "goat.webp" },
  { id: 6, title: "50 Epic Anime Legends Collage Set", price: 459, image: "WALLWHITE.webp" },
];

function SliderEndCarousel() {
  return (
    <div className="collage-store-container">
      <h2 className="collage-title">NEW ARRIVAL💥</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        touchRatio={1}
        simulateTouch={true}
        allowTouchMove={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="collage-carousel"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="collage-card">
            <img src={product.image} alt={product.title} className="collage-image" />
            <div className="collage-info">
              <p className="collage-name">{product.title}</p>
              <p className="product-price">From Rs. {product.price}.00</p>
              <select className="product-select">
                <option>A4 - Rs. {product.price}.00</option>
                <option>A3 - Rs. {product.price + 100}.00</option>
                <option>A2 - Rs. {product.price + 200}.00</option>
              </select>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="controls-container">
        <button className="custom-prev">← Previous</button>
        <button className="custom-next">Next →</button>
      </div>

      <div className="view-all-container">
        <button className="view-all">View all</button>
      </div>
    </div>
  );
}

export default SliderEndCarousel;
