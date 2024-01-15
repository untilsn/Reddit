import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ data, kind = "primary" }) => {
  if (!data) return;
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {data?.image.length > 0 &&
        data?.image.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${
              kind === "secondary" ? "h-[450px]" : "h-full"
            } flex items-center justify-center w-full mx-auto my-auto`}
          >
            <div className="overflow-hidden ">
              <img src={item} className="object-cover w-full h-full " alt="" />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
