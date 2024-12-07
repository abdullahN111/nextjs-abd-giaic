import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface BookData {
  params: { id: string};
  available: boolean;
}

const page = async (book:BookData) => {
    const id = book.params.id;

   const fetchBookData = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
   const bookData = await fetchBookData.json()

  return (
    <div className="flex flex-col md:flex-row items-center max-w-[1280px] mx-auto bg-white shadow-lg rounded-lg p-6 my-12">
      <div className="flex flex-col justify-between w-full md:w-2/3 p-6">
        <h1 className="text-3xl font-bold mb-4">{bookData.name}</h1>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Author:</span> {bookData.author}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Type:</span> {bookData.type}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Price:</span> ${bookData.price}
        </p>
        <p className="text-lg text-gray-700 mb-6">
          <span className="font-semibold">Stock:</span>{" "}
          {bookData.available ? (
            <span className="text-green-600 font-semibold">In Stock</span>
          ) : (
            <span className="text-red-600 font-semibold">Out of Stock</span>
          )}
        </p>

        <div className="flex gap-4">
          <button
            className={`${
              bookData.available
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } text-white py-2 px-6 rounded-lg flex items-center gap-2 transition-all`}
            disabled={!bookData.available}
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
