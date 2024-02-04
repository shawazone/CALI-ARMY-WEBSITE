// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="  w-1/2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-64 w-52">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
