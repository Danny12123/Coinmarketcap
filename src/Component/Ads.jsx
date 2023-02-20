import React from 'react';
import "../Styles/ads.css";
import Carousel from "react-bootstrap/Carousel";
import pic1 from '../Img/55.jpeg';
import pic2 from '../Img/33.jpeg';
import pic3 from '../Img/66.jpeg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const Ads = () => {
  
  return (
    <div>
      
      <h6 className="news">News</h6>
      <div className="ads">
        <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src={pic1} className="car_img" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src={pic2} className="car_img" alt="Image 2"/>
  </SplideSlide>
</Splide>
        {/* <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 car_img"
              src={pic1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 car_img"
              src={pic2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 car_img"
              src={pic3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel> */}
      </div>
    </div>
  );
}

export default Ads
