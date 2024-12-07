import Link from "next/link";

interface BooksData {
  name: string;
  type: string;
  available: string;
  id: number;
}

export default async function Home() {
  const rawBooksData = await fetch("https://simple-books-api.glitch.me/books");
  const booksResult = await rawBooksData.json();

  return (
    <div>
      <div className="max-w-[1280px] mx-auto py-12 px-4 md:px-8">
        <h1 className="text-center text-3xl font-bold">Trending Books</h1>
        <div className="w-full h-px bg-gray-300 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {booksResult.map((book: BooksData, index: number) => {
            return (
              <div
                key={index}
                className="h-[300px] w-full max-w-[400px] bg-slate-100 rounded-md shadow-md flex flex-col items-center justify-center gap-3 py-4 px-4"
              >
                <h3 className="text-2xl font-bold">Name: {book.name}</h3>
                <h4 className="text-lg font-semibold">Type: {book.type}</h4>
                <h4 className="text-lg">
                  Available: {book.available ? "Yes" : "No"}
                </h4>
                <Link href={`/product/${book.id}`}>   <button className="bg-black text-white py-2 px-4 text-center text-base rounded-md mt-8 hover:bg-gray-800 transition-all">
                  See Details
                </button></Link>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-gray-300 my-8"></div>
      </div>

    </div>
  );
}
