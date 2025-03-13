import React from "react";
import "./multi-poster.css";

const products = [
    {
        title: "BMW M8 Competition | Car Set | 3 Piece Set",
        price: 299,
        image: "./bmwm8.webp",
    },
    {
        title: "Manifestation | Gautama Buddha #01 | Mythology | 3 Piece Set",
        price: 299,
        image: "./budhu.webp",
    },
    {
        title: "Lord Shiva | Mythology #01 | 3 Piece Set",
        price: 299,
        image: "./lord-shiva.webp",
    },
    {
        title: "Gotham is MINE | Batman | 3 Piece Set",
        price: 299,
        image: "./batman.webp",
    },
];

function MultiPoster() {
    return (
        <section className="multi-poster-sets">
            <h2 className="section-title">
                <img
                    src="./Multi-Poster.webp"
                    alt="Multi-Poster Sets - Posters Made Better in Sets!"
                    className="heading-image"
                />
            </h2>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-image">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">From Rs. {product.price}.00</p>
                        <select className="product-select">
                            <option>A4 - Rs. {product.price}.00</option>
                            <option>A3 - Rs. {product.price + 100}.00</option>
                            <option>A2 - Rs. {product.price + 200}.00</option>
                        </select>
                        <button className="add-to-cart">Add to cart</button>
                    </div>
                ))}
            </div>

            <div className="view-all-wrapper">
                <button className="view-all-btn">View all</button>
            </div>
        </section>
    );
}

export default MultiPoster;
