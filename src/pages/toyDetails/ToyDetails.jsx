import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import useHeaderName from "../../hooks/useHeaderName";

const ToyDetails = () => {
  useHeaderName("Toy Details");
  const singleToys = useLoaderData();

  const {
    toyName,
    photoUrl,
    sellerName,
    sellerEmail,
    category,
    price,
    rating,
    quantity,
    description,
  } = singleToys;
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photoUrl} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{toyName}</h1>
          <h3 className="text-3xl">Price: $ {price}</h3>
          <p className="text-xl mt-2">Seller: {sellerName}</p>
          <p className="text-xl">Seller Email: {sellerEmail}</p>
          <p className="text-xl">Toy Category: {category}</p>
          <p className="flex items-center text-3xl mt-2">
            Rating: {rating}{" "}
            <span className="text-yellow-400">
              <AiFillStar />
            </span>
          </p>
          <p className="mt-3 text-3xl">Quantity Available: {quantity} pice</p>
          <p className="py-4 font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
