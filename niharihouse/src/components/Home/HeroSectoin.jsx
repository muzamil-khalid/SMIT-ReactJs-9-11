import React from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} custom-arrow next`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} custom-arrow next`} onClick={onClick} />;
}
function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider">
          <img
            src="https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710299-header-2.jpg%3Fver%3D10&w=1920&q=90"
            alt="alternate"
          />
        </div>
        <div className="slider">
          <img
            src="https://javednihari.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1697710307-header-1.jpg%3Fver%3D10&w=1920&q=90"
            alt="alternate"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
