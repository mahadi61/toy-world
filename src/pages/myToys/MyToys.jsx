const MyToys = () => {
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
            <tr>
              <td>Seller</td>
              <td>Toy Name</td>
              <td>Sub-category</td>
              <td>Price</td>
              <td>Available Quantity</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
