import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/gallery/img1.JPG";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import img8 from "../../assets/gallery/img8.jpg";
import img9 from "../../assets/gallery/img9.jpg";
import img10 from "../../assets/gallery/img10.JPG";
import img11 from "../../assets/gallery/img11.JPG";
import img12 from "../../assets/gallery/img12.JPG";
import img13 from "../../assets/gallery/img13.JPG";
import img14 from "../../assets/gallery/img14.JPG";
import img15 from "../../assets/gallery/img15.JPG";
import img16 from "../../assets/gallery/img16.JPG";
import img17 from "../../assets/gallery/img17.JPG";
import img18 from "../../assets/gallery/img18.JPG";
import img19 from "../../assets/gallery/img19.JPG";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./gallery.css";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
function Gallery() {
  return (
    <div>
      <h1 className="gallery-title">Math Fiesta ' 23</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img17} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img18} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Gallery;
