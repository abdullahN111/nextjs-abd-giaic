import Link from "next/link";

export default function Career() {
    return ( <div>
      <nav>
      <ul className="ul-page flex px-12 pt-6 pb-5 bg-black text-2xl text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/career">Career</Link></li>
        <li><Link href="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
      <h1 className="text-3xl pt-5">This is Career Page</h1>
    
    </div>
    );
  }
  