import { Link } from "react-router-dom";

const ToysRow = ({ toy }) => {
  const { sellerName, category, price, quantity, toyName, _id } = toy;
  console.log(_id);
  return (
    <tr className="font-bold">
      <td>{sellerName || "Seller Name Unavailable"}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`} className="btn btn-success">
          details
        </Link>
      </th>
    </tr>
  );
};

export default ToysRow;
