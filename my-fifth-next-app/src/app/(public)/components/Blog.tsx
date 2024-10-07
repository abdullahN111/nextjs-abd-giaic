import Link from "next/link"

function Blog() {
   return (
    <div className="border border-black m-10 mx-16 p-6 rounded-md">
    <h2 className="text-2xl font-bold mb-3">Lorem Ipsum Dolor</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque laborum enim eaque, commodi eius tempora, quaerat officia consequuntur libero quam adipisci dolore similique obcaecati necessitatibus, eveniet provident nam mollitia ipsum facilis voluptatum excepturi vitae? Enim repudiandae saepe suscipit at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis praesentium illo labore sapiente quidem rem impedit, ex aut repudiandae necessitatibus ipsum accusantium odit aliquam itaque quisquam sint voluptates.</p>
    <div className="mt-4">
    <Link href="/blogs">
      <p className="text-blue-600 hover:underline">See More Blogs</p> 
    </Link>
  </div>
  </div>
   )
}

export default Blog