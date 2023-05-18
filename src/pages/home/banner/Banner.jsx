import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import banner2 from "../../../assets/green-01.jpg";
import banner3 from "../../../assets/green-02-01.jpg";
import banner1 from "../../../assets/yello-01.jpg";
import banner4 from "../../../assets/yello-02-01.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="card image-full">
            <figure>
              <img src={banner1} alt="car" />
            </figure>
            <div className="card-body text-center lg:py-40 ">
              <div className="bg-[#eedb35] p-5 mx-auto rounded-lg">
                <h2 className="text-[#3B4051] text-center font-bold text-3xl ">
                  New Arrival!!
                </h2>
              </div>
              <h1 className="font-extrabold text-center text-6xl lg:text-8xl">
                Kids Toy Box
              </h1>
              <span className="text-3xl my-2">
                Flat 10% Of On Order Above %30.50
              </span>
              <div className="items-center">
                <Link className="btn bg-yellow-400 mt-4 border-0 btn-secondary text-[#3B4051]">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card image-full">
            <figure>
              <img src={banner2} alt="car" />
            </figure>
            <div className="card-body text-center lg:py-40 ">
              <div className="bg-[#eedb35] p-5 mx-auto rounded-lg">
                <h2 className="text-[#3B4051] text-center font-bold text-3xl ">
                  New Arrival!!
                </h2>
              </div>
              <h1 className="font-extrabold text-center text-6xl lg:text-8xl">
                One Box Toy
              </h1>
              <span className="text-3xl my-2">
                Flat 10% Of On Order Above %30.50
              </span>
              <div className="items-center">
                <Link className="btn bg-yellow-400 mt-4 border-0 btn-secondary text-[#3B4051]">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card image-full">
            <figure>
              <img src={banner3} alt="" />
            </figure>
            <div className="card-body text-center lg:py-40 ">
              <div className="bg-[#eedb35] p-5 mx-auto rounded-lg">
                <h2 className="text-[#3B4051] text-center font-bold text-3xl ">
                  New Arrival!!
                </h2>
              </div>
              <h1 className="font-extrabold text-center text-6xl lg:text-8xl">
                Kids Toy Box
              </h1>
              <span className="text-3xl my-2">
                Flat 10% Of On Order Above %30.50
              </span>
              <div className="items-center">
                <Link className="btn bg-yellow-400 mt-4 border-0 btn-secondary text-[#3B4051]">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card image-full">
            <figure>
              <img src={banner4} alt="" />
            </figure>
            <div className="card-body text-center lg:py-40 ">
              <div className="bg-[#eedb35] p-5 mx-auto rounded-lg">
                <h2 className="text-[#3B4051] text-center font-bold text-3xl ">
                  New Arrival!!
                </h2>
              </div>
              <h1 className="font-extrabold text-center text-6xl lg:text-8xl">
                One Box Toy
              </h1>
              <span className="text-3xl my-2">
                Flat 10% Of On Order Above %30.50
              </span>
              <div className="items-center">
                <Link className="btn bg-yellow-400 mt-4 border-0 btn-secondary text-[#3B4051]">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
