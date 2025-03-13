import React from "react";
import "./section4.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "last-slider4.webp",
    review: "Got them yesterday, just wanted to say thanks! Amazing quality ❤️",
  },
  {
    id: 2,
    type: "image",
    src: "last-slider3.webp",
    review: "I absolutely loved it! The quality is top-notch, and it looks amazing on my wall.",
  },
  {
    id: 3,
    type: "image",
    src: "last-slider2.webp",
    review: "Good quality and great stuff",
  },
  {
    id: 4,
    type: "image",
    src: "last-slider1.jpg",
    review: "Nice product, loved it",
  },
  {
    id: 5,
    type: "video",
    src: "video-slider.mp4",
    review: "Amazing video quality and great content!",
  }
];

const Feature = ({ icon, title, description }) => (
  <div className="feature">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const PosterGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">WHY CHOOSE US?</h2>
      <div className="features-grid">
        <Feature icon="🏆" title="Quality Guaranteed" description="Each poster is crafted using premium materials." />
        <Feature icon="🎨" title="Custom Creations" description="Upload your own images and create personalized posters." />
        <Feature icon="🔥" title="Exclusive Offers" description="Save big with our exciting deals." />
        <Feature icon="🚚" title="Free Shipping" description="Enjoy free delivery on prepaid orders." />
      </div>

      <div className="media-section">
        <Slider {...settings}>
          {mediaItems.map((item) => (
            <div key={item.id} className="media-slide">
              {item.type === "image" ? (
                <img src={item.src} alt="Media" className="media-image" />
              ) : (
                <video controls className="media-video">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="media-review">{item.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PosterGallery;
