const MyToysRow = ({ toyData }) => {
  const { toyName, sellerName, category, price, quantity } = toyData;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-success">Update</button>
      </td>
      <td>
        <button className="btn btn-warning">Delete</button>
      </td>
    </tr>
  );
};

export default MyToysRow;
