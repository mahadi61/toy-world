const AddToy = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center my-4">
        <h1 className="text-3xl lg:text-5xl font-bold">Add Your Toy</h1>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-3">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Picture URL of the toy:
            </label>
            <input
              type="text"
              id="picture"
              name="pictureURL"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Seller Email:</label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Sub-category:</label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label name="block mb-2 text-gray-700">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Rating:</label>
            <input
              type="text"
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
              type="text"
              id="quantity"
              name="quantity"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Detail Description:
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
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
