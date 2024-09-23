"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <>
      <div className="bg-blue-500 fixed flex h-16 inset-x-0 items-center justify-between px-4 shadow-lg text-white top-0">
        <h1 className="flex-grow text-center text-lg font-bold">{title}</h1>
        <button className="p-2 rounded-full transition hover:bg-blue-400" onClick={handleSidebar}>
          <FaBars />
        </button>
      </div>
      <div>
        <div className={sidebar ? `bg-black cursor-pointer fixed inset-0 opacity-60 visible`: `hidden opacity-0`} onClick={handleSidebar}></div>
        <div className={sidebar ? `bg-white fixed inset-y-0 py-4 right-0 w-64`: `bg-white fixed inset-y-0 py-4 -right-full w-64`}>
          <button className="absolute -left-8 p-1 rounded-full text-gray-500 top-4 transition hover:bg-red-400" onClick={handleSidebar}>
            <FaTimes />
          </button>
          <h2 className="text-3xl text-blue-500 font-bold italic ml-16 mt-3 mb-6">
            SideBar
          </h2>
          <ul className="font-normal text-gray-500">
            <li className="m-1 text-xl bg-gray-100 inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100" onClick={handleSidebar}>
              <Link href="/">Home</Link>
            </li>
            <li className="m-1 text-xl bg-gray-100 inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100" onClick={handleSidebar}>
              <Link href="/about">About</Link>
            </li>
            <li className="m-1 text-xl bg-gray-100 inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100" onClick={handleSidebar}>
              <Link href="/career">Career</Link>
            </li>
            <li className="m-1 text-xl bg-gray-100 inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100" onClick={handleSidebar}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
