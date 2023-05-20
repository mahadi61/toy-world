import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Gallery = () => {
  return (
    <section className="my-5">
      <h1 className="text-center text-4xl mb-4">Car Photo Gallery</h1>
      <div
        className="grid lg:grid-cols-4 grid-cols-1"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img src="https://i.ibb.co/56cVPFs/red-racing-car-01.png" alt="" />
        <img src="https://i.ibb.co/dBxfsBp/red-big-truck-01.png" alt="" />
        <img src="https://i.ibb.co/FzXm9Gy/blue-car-01.png" alt="" />
        <img src="https://i.ibb.co/wsT9Hsy/green-balck-01.png" alt="" />
        <img src="https://i.ibb.co/qrYwGzV/yello-racing-car-01.png" alt="" />
        <img src="https://i.ibb.co/Kyw9yx9/white-police-01.png" alt="" />
        <img src="https://i.ibb.co/n8NnDBB/red-car-01.png" alt="" />
        <img src="https://i.ibb.co/1RGp62X/taxi-01.png" alt="" />
      </div>
    </section>
  );
};

export default Gallery;
