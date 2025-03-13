import React from "react";
import "./section1.css";

const products = [
  {
    id: 1,
    title: "50 Epic Trippy Aesthetic Collage Set",
    price: "Rs. 389.00",
    oldPrice: "Rs. 999.00",
    image: "trippy_wall.webp",
  },
  {
    id: 2,
    title: "50 Epic Game Universe Collage Set",
    price: "Rs. 389.00",
    oldPrice: "Rs. 999.00",
    image: "game_wall.webp",
  },
  {
    id: 3,
    title: "50 Epic The Starry Night Collage Set",
    price: "Rs. 389.00",
    oldPrice: "Rs. 999.00",
    image: "starry_wall.webp",
  },
  {
    id: 4,
    title: "50 Epic DC Cinematic Universe Collage Set",
    price: "Rs. 389.00",
    oldPrice: "Rs. 999.00",
    image: "movies_wall.webp",
  },
];

const CollageStore = () => {
  return (
    <div className="collage-store-container">
      <h2 className="collage-title">Expressive Collage Packs✨</h2>
      <div className="collage-grid">
        {products.map((product) => (
          <div key={product.id} className="collage-card">
            <img src={product.image} alt={product.title} className="collage-image" />
            <div className="collage-info">
              <p className="old-price">{product.oldPrice}</p>
              <p className="new-price">{product.price}</p>
              <p className="collage-name">{product.title}</p>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all">View all</button>
      </div>
    </div>
  );
};

export default CollageStore;
