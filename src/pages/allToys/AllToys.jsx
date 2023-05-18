const AllToys = () => {
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
            {/* row 1 */}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>
                <button className="btn  btn-success">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
