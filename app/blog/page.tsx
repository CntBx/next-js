import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blog Page',
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json()
}

const Blog = async () => {
  const posts = await getData();

  return (
    <div className="m-auto h-full">
      <div className="text-center">My Page</div>
      <div className="text-center flex flex-col">
        {posts.map((el: unknown) =>
          <li className=""> <Link href={`/blog/${el.id}`}><span className="hover:underline cursor-pointer">{el.name}</span></Link> </li>
        )}
      </div>
    </div>
  )
}

export default Blog