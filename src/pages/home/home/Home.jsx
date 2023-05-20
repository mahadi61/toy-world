import Gallery from "../Gallery/Gallery";
import LatestCars from "../LatestCars/LatestCars";
import Banner from "../banner/Banner";
import BestSelling from "../bestSelling/BestSelling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="w-11/12 mx-auto">
        <Gallery></Gallery>

        <BestSelling></BestSelling>
        <LatestCars></LatestCars>
      </section>
    </div>
  );
};

export default Home;
