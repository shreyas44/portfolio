import styled from "styled-components"
import { BlogData } from "../lib/blogs"
import BlogCard from "./cards/BlogCard"

interface Props {
  blogs: BlogData[]
}

const BlogsContainer = styled.div`
  scroll-snap-type: x mandatory;

  & > div:last-child {
    position: relative;
    margin-right: 1.25rem;

    &::after {
      content: "";
      height: 1px;
      width: 1px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`

const Blogs: React.FC<Props> = ({ blogs }) => {
  const renderedBlogs = blogs.map((blog) => (
    <BlogCard key={blog.id} blog={blog} />
  ))

  return (
    <div className="flex items-center justify-center w-full h-full overflow-visible">
      <BlogsContainer className="flex w-10/12 px-5 py-10 m-auto overflow-x-auto overflow-y-visible gap-x-6">
        {renderedBlogs}
      </BlogsContainer>
    </div>
  )
}

export default Blogs
