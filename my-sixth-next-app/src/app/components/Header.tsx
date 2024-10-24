const Header = () => {
  return (
    <header className="flex justify-between bg-black text-white w-full h-20 items-center">
        <div className="ml-6">LOGO</div>
        <nav>
            <ul className="flex gap-3">
                <li className="cursor-pointer transform-none mx-2 text-lg">Home</li>
                <li className="cursor-pointer transform-none mx-2 text-lg">About</li>
                <li className="cursor-pointer transform-none mx-2 text-lg">Services</li>
                <li className="cursor-pointer transform-none mx-2 text-lg">Contact</li>
            </ul>
        </nav>
        <div className="mr-6">
            <span className="bg-white text-black text-sm py-1 px-3">Search</span>
            <input type="text"/>
        </div>
    </header>
  )
}

export default Header