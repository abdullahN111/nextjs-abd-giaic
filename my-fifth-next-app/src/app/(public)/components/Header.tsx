import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between h-20 bg-black text-white justify-center items-center">
      <div className="pl-12 text-lg">
        <Link href="/"> <h3>iBlog</h3> </Link>
      </div>
      <div>
        <ul  className="flex mr-16 space-x-8 text-2xl">
          <Link href="/"><li>Home</li></Link>
          <Link href="./about"><li>About</li></Link>
          <Link href="./blogs"><li>Blogs</li></Link>
          <Link href="./contact-us"><li>Contact Us</li></Link>
        </ul>
      </div>
      <div  className="pr-12 text-md">
        <button>
          <Link href="./login">Login</Link><span>/</span><Link href="./register">Register</Link>
          </button>
      </div>
    </header>
  );
}

export default Header;
