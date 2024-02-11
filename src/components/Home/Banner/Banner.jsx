import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/281237.webp";


import ImageSlider from "./ImageSlider";
import flowerImg from "../../../images/1.png";
import lighthouseImg from "../../../images/2.png";
import dandelion from "../../../images/3.png";



const Banner = () => {
  const images = [
    lighthouseImg,
    flowerImg,
    dandelion,
    lighthouseImg,
    flowerImg,
    dandelion,
    lighthouseImg,
    // Add more image URLs here
  ];
  return (
    // <div className="hero-banner">
    //   <div className="content">
    //     <div className="text-content">
    //       <h1>Sales</h1>
    //       <p>
    //         Convallis interdum purus adipiscing dis parturient posuere ac a quam
    //         a eleifend montes parturient posuere curae tempor
    //       </p>
    //       <div className="ctas">
    //         <div className="banner-cta">Read More</div>
    //         <div className="banner-cta v2">Shop Now </div>
    //       </div>
    //     </div>
    //     <img className="banner-img" src={BannerImg} alt="" 
        
    //     />
    //   </div>
    // </div>
    <div className="Ap">
      <div >
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default Banner;
