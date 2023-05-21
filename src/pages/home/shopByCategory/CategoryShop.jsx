import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const CategoryShop = () => {
  const [toyData, setToyData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://toy-world-server-two.vercel.app/toyCategory/${category}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, [category]);

  return (
    <div className="my-4">
      <h1 className="text-4xl text-center mb-7">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("Racing car")}>Racing Car</Tab>
          <Tab onClick={() => setCategory("Fire Truck")}>Fire Truck</Tab>
          <Tab onClick={() => setCategory("Regular car")}>Regular Car</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {toyData.map((toy) => (
          <CategoryCard key={toy._id} toy={toy}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryShop;
