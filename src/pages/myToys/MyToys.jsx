import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const [myToysData, setMyToysDate] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(params.email);
  // get an error here try to solve next day
  useEffect(() => {
    fetch(`https://toy-world-server-two.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToysDate(data));
  }, [user]);

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
        fetch(`http://localhost:5000/deleteToy/${id}`, {
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
