import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

AOS.init();

const LatestCars = () => {
  return (
    <div
      className="my-5"
      data-aos="flip-up"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      <h1 className="text-center text-4xl my-5">
        Latest Cars Updated On Last Month
      </h1>
      <Swiper
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   300: {
        //     // width: 576,
        //     slidesPerView: 1,
        //   },
        // }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 1500 }}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/56cVPFs/red-racing-car-01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/dBxfsBp/red-big-truck-01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/wsT9Hsy/green-balck-01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FzXm9Gy/blue-car-01.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LatestCars;
