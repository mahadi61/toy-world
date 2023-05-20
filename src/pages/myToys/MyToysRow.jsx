import { Link } from "react-router-dom";

const MyToysRow = ({ toyData }) => {
  const { toyName, sellerName, category, price, quantity, _id } = toyData;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/updateToy/${_id}`} className="btn btn-success">
          Update
        </Link>
      </td>
      <td>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
  );
};

export default MyToysRow;
