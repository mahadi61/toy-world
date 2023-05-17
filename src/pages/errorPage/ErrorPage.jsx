import { Link, useRouteError } from "react-router-dom";
import errorBanner from "../../assets/error-01.png";

const ErrorPage = () => {
  const { status, error, statusText } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-1/2 mx-auto" src={errorBanner} alt="" />
      <div className="pb-14 text-center">
        <h2 className="text-4xl my-2 font-semibold text-red-600">
          Error: {status} {statusText}
        </h2>
        <h4>{error.message}</h4>
        <Link to="/" className="btn bg-orange-400 mt-2 border-0">
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
