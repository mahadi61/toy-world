import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryShop = () => {
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch("https://toy-world-server-two.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);

  return (
    <div className="my-4">
      <h1 className="text-4xl text-center mb-7">Shop By Category</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {toyData.map((toy) => (
          <CategoryCard key={toy._id} toy={toy}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryShop;
