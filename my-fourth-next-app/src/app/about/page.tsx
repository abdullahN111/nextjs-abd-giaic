import Link from "next/link";

function About() {
  return (
    <>
      <section className="h-5/6 bg-slate-100 items-center p-10">
        <h1 className="font-bold text-3xl">About Page</h1>
        <p className="pt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iure
          ea mollitia alias. Beatae temporibus, odio neque magni doloribus, amet
          laboriosam incidunt deserunt optio aliquid recusandae dicta ut sint
          earum doloremque sit architecto nihil! Velit commodi enim magni
          consectetur hic quasi, quam nisi eos voluptatem sint iste harum
          voluptatibus debitis ut dolorem architecto sunt eius aliquid eum esse
          expedita pariatur?
        </p>
        <Link href="/about/achievements">
          <button className="mt-9 mx-auto block bg-blue-500 text-white py-3 px-4 rounded">
            Click to see our Achievements
          </button>
        </Link>
      </section>
    </>
  );
}

export default About;
