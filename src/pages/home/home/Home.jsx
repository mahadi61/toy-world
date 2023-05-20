import useHeaderName from "../../../hooks/useHeaderName";
import Gallery from "../Gallery/Gallery";
import LatestCars from "../LatestCars/LatestCars";
import Banner from "../banner/Banner";
import BestSelling from "../bestSelling/BestSelling";
import CategoryShop from "../shopByCategory/CategoryShop";

const Home = () => {
  useHeaderName("Home");

  return (
    <div>
      <Banner></Banner>
      <section className="w-11/12 mx-auto">
        <Gallery></Gallery>
        <CategoryShop></CategoryShop>
        <BestSelling></BestSelling>
        <LatestCars></LatestCars>
      </section>
    </div>
  );
};

export default Home;
