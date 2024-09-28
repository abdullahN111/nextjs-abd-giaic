import Link from "next/link";

function Header() {
  return (
    <>
      <header>
        <ul className="flex bg-red-500 gap-2 h-16 items-center pl-32 text-xl font-bold">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/career">
            <li>Career</li>
          </Link>
          <Link href="/contact-us">
            <li>Contact Us</li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default Header;
