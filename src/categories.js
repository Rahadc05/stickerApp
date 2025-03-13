import React from "react";
import "./categories.css";

const categories = [
    { name: "Custom Poster", image: "./custom.webp" },
    { name: "Superhero Collections", image: "./superhero.webp" },
    { name: "Car Collections", image: "./car.webp" },
    { name: "Movie Collections", image: "./movie.webp" },
    { name: "TV-Series Collections", image: "./tv.webp" },
    { name: "Music Collections", image: "./music.webp" },
    { name: "Video Game Collections", image: "./game.webp" },
    { name: "Motivate Collections", image: "./motivate.webp" },
    { name: "Cricket Collections", image: "./cricket.webp" },
    { name: "Football Collections", image: "./football.webp" },
    { name: "F1 Collections", image: "./f1.webp" },
    { name: "Explore More !", image: "./explore.webp" },
];

function Categories() {
    return (
        <div className="categories-row">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                    <div className="category-image">
                        <img src={category.image} alt={category.name} />
                    </div>
                    <p className="category-name">{category.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Categories;
