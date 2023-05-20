import { useEffect, useState } from "react";
import useHeaderName from "../../hooks/useHeaderName";
import ToysRow from "./ToysRow";

const AllToys = () => {
  useHeaderName("All Toys");

  const [toyData, setToyData] = useState([]);
  const [searchText, seSearchText] = useState("");

  useEffect(() => {
    fetch("https://toy-world-server-two.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toys/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  };

  return (
    <div>
      <div className="w-96 my-7 mx-auto">
        <label className="text-xl">Search Toy By Name</label>
        <div className="w-full">
          <div className="form-control">
            <div className="input-group items-center mx-auto">
              <input
                type="text"
                placeholder="Search…"
                onChange={(event) => seSearchText(event.target.value)}
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto my-4">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {toyData.map((toy) => (
              <ToysRow key={toy._id} toy={toy}></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
