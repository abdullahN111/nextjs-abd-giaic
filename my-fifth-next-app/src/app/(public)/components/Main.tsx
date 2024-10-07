import Link from "next/link";
import React from "react";
import Blog from "./Blog";

function Main() {
  return (
    <main>
      <div className="max-w-6xl m-auto mt-16 p-8 bg-white shadow-lg rounded-lg border border-gray">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to iBlog</h1>
        <p className="text-gray-700 text-md leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          esse nam rerum cupiditate? Perferendis repudiandae accusamus iure
          velit? Modi, ut nostrum. Odio quibusdam doloribus, nemo dicta
          assumenda voluptatum. Numquam consequuntur eveniet cum optio expedita
          omnis ipsum aspernatur, culpa natus! Cum deserunt accusamus magnam a
          ex voluptatibus facilis quo maxime quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, debitis harum. Doloribus pariatur officiis vel!
        </p>
      </div>

      <Blog></Blog>
    </main>
  );
}

export default Main;
