import { BlogData } from "../lib/blogs"
import BlogCard from "./cards/BlogCard"

interface Props {
  blogs: BlogData[]
}

const Blogs: React.FC<Props> = ({ blogs }) => {
  const renderedBlogs = blogs.map((blog) => (
    <BlogCard key={blog.id} blog={blog} />
  ))

  return (
    <div className="flex items-center justify-center w-full h-full overflow-visible">
      <div className="w-10/12 px-5 py-10 m-auto overflow-x-scroll overflow-y-visible">
        <div className="flex overflow-y-visible w-content gap-x-6">
          {renderedBlogs}
        </div>
      </div>
    </div>
  )
}

export default Blogs
