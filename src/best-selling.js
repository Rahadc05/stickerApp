import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./best-selling.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
    {
        title: "TOYOTA SUPRA MK4 | CONCEPT CARS #04 | CAR POSTERS",
        price: 99,
        image: "./supra.webp",
    },
    {
        title: "Porsche 911 GT3 RS | Performance Icons #01 | Car Posters",
        price: 99,
        image: "./porsche911.webp",
    },
    {
        title: "DODGE CHARGER | CLASSIC LEGEND | CAR POSTERS",
        price: 99,
        image: "./dodgecharger.webp",
    },
    {
        title: "NISSAN SKYLINE R34 | CONCEPT CARS #04 | CAR POSTERS",
        price: 99,
        image: "./skyline.webp",
    },{
        title: "The Weeknd | We Don't Pray For Love | Music Artist Poster",
        price: 99,
        image: "./weeknd.webp",
    },
    {
        title: "Rise Above Hate | Virat Kohli | Cricket Poster",
        price: 99,
        image: "./rise.jpg",
    },
    {
        title: "DODGE II SRT | CONCEPT CARS #07 | CAR POSTERS",
        price: 99,
        image: "./dodge.webp",
    },
    {
        title: "BMW M5 | CONCEPT CARS #06 | CAR POSTERS",
        price: 99,
        image: "./bmwm5.webp",
    },
];

function Bestselling() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        afterChange: (index) => setCurrentSlide(index + 1),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="bestselling">
            <h2 className="bestselling__title">
                <img
                    src="./best selling.webp"
                    alt="Best Selling Posters"
                    className="bestselling__heading-image"
                />
            </h2>

            <div className="bestselling__slider">
                <Slider ref={sliderRef} {...settings}>
                    {products.map((product, index) => (
                        <div className="bestselling__card" key={index}>
                            <div className="bestselling__image-wrapper">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <h3 className="bestselling__product-title">{product.title}</h3>
                            <p className="bestselling__product-price">
                                From Rs. {product.price}.00
                            </p>
                            <select className="bestselling__product-select">
                                <option>A4 - Rs. {product.price}.00</option>
                                <option>A3 - Rs. {product.price + 100}.00</option>
                                <option>A2 - Rs. {product.price + 200}.00</option>
                            </select>
                            <button className="bestselling__add-to-cart">Add to cart</button>
                        </div>
                    ))}
                </Slider>

                <div className="bestselling__controls">
                    <button
                        className="bestselling__btn-prev"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        &#60;
                    </button>
                    <span className="bestselling__counter">
                        {currentSlide} / {products.length}
                    </span>
                    <button
                        className="bestselling__btn-next"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        &#62;
                    </button>
                </div>
            </div>

            <div className="bestselling__view-all-wrapper">
                <button className="bestselling__view-all-btn">View all</button>
            </div>
        </section>
    );
}

export default Bestselling;
