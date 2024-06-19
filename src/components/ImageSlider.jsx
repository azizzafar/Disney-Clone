import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import slideImg1 from "../assets/slider-scale.jpg"
import slideImg2 from "../assets/slider-badging.jpg"
import slideImg3 from "../assets/slider-scales.jpg"


function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Carousel {...settings}>
       <Wrap>
        <img src = {slideImg1} /> 
       </Wrap>

       <Wrap>
        <img src ={slideImg2} /> 
       </Wrap>

       <Wrap>
        <img src = {slideImg3} /> 
       </Wrap>

    </Carousel>
  )
}

export default ImageSlider;

const Carousel = styled(Slider) `
    margin-top: 20px;

    ul li button {
      &:before {
        font-size: 10px;
        color: white;
      }
    }

    li.slick-active button:before{
      color: white;
    }

    .slick-list {
      overflow: visible;
    }

 `;

 const Wrap = styled.div `

    cursor: pointer; 

    img {
      border: 4px solid transparent;
      border-radius: 6px;
      width: 100%;
      height: 100%;
      box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, 
      rgb(0 0 0 /73%) 0px 16px 10px -10px;

      &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8)
      }
      
    }
 `;