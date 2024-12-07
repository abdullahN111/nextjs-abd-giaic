
const Header = () => {
  return (
    <header className="bg-black px-4 md:px-6">
      <div className="max-w-[1280px] mx-auto text-white flex items-center justify-between h-14">
        <h2 className="text-lg md:text-xl font-semibold">Books Hub</h2>
        <ul className="flex gap-2 sm:gap-3 md:gap-4">
          <li className="text-[13px] md:text-[15px] font-semibold">Home</li>
          <li className="text-[13px] md:text-[15px] font-semibold">About</li>
          <li className="text-[13px] md:text-[15px] font-semibold">Books</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
