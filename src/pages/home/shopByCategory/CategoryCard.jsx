import { AiFillStar } from "react-icons/ai";

const CategoryCard = ({ toy }) => {
  const { toyName, photoUrl, price, rating } = toy;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="toy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {toyName}
          <div className="badge badge-secondary">
            Rating: {rating}
            <span className="text-yellow-400">
              <AiFillStar />
            </span>{" "}
          </div>
        </h2>
        <div className="card-actions">
          <h3 className="text-2xl">Price: $ {price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
