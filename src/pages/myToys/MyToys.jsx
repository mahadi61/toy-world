import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useHeaderName from "../../hooks/useHeaderName";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  useHeaderName("My Toys");

  const [myToysData, setMyToysDate] = useState([]);
  const { user } = useContext(AuthContext);
  // sate for ascending and descending
  const [sortValue, setSortValue] = useState(1);

  useEffect(() => {
    fetch(
      `https://toy-world-server-two.vercel.app/myToys?email=${user?.email}&sort=${sortValue}`
    )
      .then((res) => res.json())
      .then((data) => setMyToysDate(data));
  }, [user, sortValue]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-world-server-two.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = myToysData.filter((t) => t._id !== id);
            setMyToysDate(remaining);
          });
      }
    });
  };

  return (
    <div className="mt-5">
      <div className="w-11/12 mx-auto">
        <div className="dropdown dropdown-hover">
          <label className="text-2xl">Sort by price</label>
          <label tabIndex={0} className="btn btn-outline  m-1">
            sort
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => setSortValue(1)}>ascending</button>
            </li>
            <li>
              <button onClick={() => setSortValue(-1)}>descending</button>
            </li>
          </ul>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {myToysData.map((toyData) => (
              <MyToysRow
                key={toyData._id}
                toyData={toyData}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
