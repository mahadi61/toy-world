import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const photo = form.pictureURL.value;
    const seller = form.sellerName.value;
    const email = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toyInfo = {
      toyName: toyName,
      photoUrl: photo,
      sellerName: seller,
      sellerEmail: email,
      category: subCategory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: description,
    };

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged == true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added Successfully",
            showConfirmButton: false,
            timer: 2000,
          });

          form.reset();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center my-4">
        <h1 className="text-3xl lg:text-5xl font-bold">Add Your Toy</h1>
      </div>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-2 gap-3">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Toy Name:</label>
            <input
              type="text"
              name="toyName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Picture URL of the toy:
            </label>
            <input
              type="text"
              name="pictureURL"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Seller Name:</label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Seller Email:</label>
            <input
              type="email"
              id="sellerEmail"
              value={user?.email}
              name="sellerEmail"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="">
            <label className="block mb-2 text-gray-700">Sub-category:</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              name="subCategory"
            >
              <option
                value="Racing car"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                Racing car
              </option>
              <option
                value="Fire Truck"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                Fire Truck
              </option>
              <option
                value="Regular car"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                Regular car
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label name="block mb-2 text-gray-700">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Available Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">
            Detail Description:
          </label>
          <textarea
            name="description"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="text-center mb-4">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary border-0 text-white hover:bg-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
