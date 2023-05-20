import Gallery from "../Gallery/Gallery";
import Banner from "../banner/Banner";
import BestSelling from "../bestSelling/BestSelling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="w-11/12 mx-auto">
        <Gallery></Gallery>

        <BestSelling></BestSelling>
      </section>
    </div>
  );
};

export default Home;
