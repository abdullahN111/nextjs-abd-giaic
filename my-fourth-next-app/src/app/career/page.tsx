import Link from "next/link";

function Career() {
  return (
    <>
      <section className="h-5/6 bg-slate-200 items-center p-10">
        <h1 className="font-bold text-3xl">Career Page</h1>
        <p className="pt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iure
          ea mollitia alias. Beatae temporibus, odio neque magni doloribus, amet
          laboriosam incidunt deserunt optio aliquid recusandae dicta ut sint
          earum doloremque sit architecto nihil!
        </p>
        <Link href="/career/summer-internships">
          <button className="mt-9 mx-auto block bg-blue-500 text-white py-3 px-4 rounded">
            Click to see Internships Opportunities
          </button>
        </Link>
      </section>
    </>
  );
}

export default Career;
