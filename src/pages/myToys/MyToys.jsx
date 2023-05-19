import { useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";

const MyToys = ({ params }) => {
  const [myToysData, setMyToysDate] = useState([]);
  console.log(params.email);
  // get an error here try to solve next day
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${params.email}`)
      .then((res) => res.json())
      .then((data) => setMyToysDate(data));
  }, [params.email]);

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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {myToysData.map((toyData) => (
              <MyToysRow key={toyData._id} toyData={toyData}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
