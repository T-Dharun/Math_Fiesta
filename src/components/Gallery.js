import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper";
import React from "react";
import img1 from "./../assets/gallery/img1.JPG";
import img12 from "./../assets/gallery/pic1.JPG";
import img2 from "./../assets/gallery/pic2.JPG";
import img3 from "./../assets/gallery/pic3.JPG";
import img4 from "./../assets/gallery/pic4.JPG";


const Gallery = () => {
  return (
    <div className='  pt-20'>
    <p className="text-4xl text-center  font-bold underline underline-offset-4 mb-12 ">Gallery</p>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper h-6/8 w-2/3"
      >
      <SwiperSlide><img src={img1} className=" object-contain h-full w-full " alt="SwiperSlide img1" /></SwiperSlide>
      <SwiperSlide><img src={img2} className=" object-contain h-full w-full " alt="SwiperSlide img2" /></SwiperSlide>
      <SwiperSlide><img src={img3} className=" object-contain h-full w-full " alt="SwiperSlide img3" /></SwiperSlide>
      <SwiperSlide><img src={img4} className=" object-contain h-full w-full " alt="SwiperSlide img4" /></SwiperSlide>
      <SwiperSlide><img src={img12} className=" object-contain h-full w-full " alt="SwiperSlide img5" /></SwiperSlide>
    </Swiper>  
    </div>
  );
};

export default Gallery;
