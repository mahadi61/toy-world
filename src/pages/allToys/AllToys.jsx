import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const toyData = useLoaderData();
  return (
    <div>
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
