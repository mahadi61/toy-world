import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const singleToys = useLoaderData();
  const {
    _id,
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateInfo = {
      price: price,
      quantity: quantity,
      description: description,
    };

    fetch(`https://toy-world-server-two.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated Successfully",
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
        <h1 className="text-3xl lg:text-5xl font-bold">Update Your Toy</h1>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Toy Name:</label>
            <input
              type="text"
              name="toyName"
              required
              value={toyName}
              readOnly
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
              value={photoUrl}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Seller Name:</label>
            <input
              type="text"
              name="sellerName"
              value={sellerName}
              readOnly
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Seller Email:</label>
            <input
              type="email"
              id="sellerEmail"
              value={sellerEmail}
              readOnly
              name="sellerEmail"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Sub-category:</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              name="subCategory"
              value={category}
              readOnly
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
              defaultValue={price}
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
              value={rating}
              readOnly
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
              defaultValue={quantity}
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
            defaultValue={description}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="text-center mb-4">
          <input
            type="submit"
            value="Update"
            className="btn btn-primary border-0 text-white hover:bg-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
