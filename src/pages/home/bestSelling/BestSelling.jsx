import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const BestSelling = () => {
  return (
    <div>
      <h1 className="text-center text-4xl my-5">Best Selling Cars</h1>
      <div
        className="hero min-h-screen "
        data-aos="flip-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/P5S3xDM/zip-01.png"
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Blue Zip Car</h1>
            <h3 className="text-3xl">Price: $ 45</h3>
            <p className="mt-3 text-3xl">Quantity Available: 54 pice</p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/1rf1DV3/white-privet-car-01.png"
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">White Privet Car</h1>
            <h3 className="text-3xl">Price: $ 25</h3>
            <p className="mt-3 text-3xl">Quantity Available: 34 pice</p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/kXprqXL/red-01.png"
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Red Racing Car</h1>
            <h3 className="text-3xl">Price: $ 39</h3>
            <p className="mt-3 text-3xl">Quantity Available: 230 pice</p>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        data-aos="fade-up-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/Jc4pjfC/yello-01.png"
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Yellow Racing Car</h1>
            <h3 className="text-3xl">Price: $ 65</h3>
            <p className="mt-3 text-3xl">Quantity Available: 544 pice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
