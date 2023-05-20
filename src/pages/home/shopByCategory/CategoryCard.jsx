import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { toyName, photoUrl, price, rating, _id } = toy;

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
        <div className="card-actions items-center justify-between">
          <h3 className="text-2xl">Price: $ {price}</h3>
          <Link to={`/toy/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
