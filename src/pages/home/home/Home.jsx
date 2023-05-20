import Gallery from "../Gallery/Gallery";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="w-11/12 mx-auto">
        <Gallery></Gallery>
      </section>
    </div>
  );
};

export default Home;
