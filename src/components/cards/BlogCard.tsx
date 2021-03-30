import React from "react"
import GitHub from "../../icons/github"
import { BlogData } from "../../lib/blogs"
import CardContainer from "./CardContainer"

interface Props {
  blog: BlogData
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <CardContainer className="overflow-hidden shadow-md cursor-pointer w-80 rounded-xl hover:shadow-xl">
      <div className="w-full h-1/2">
        <img src={`/${blog.image}`} className="object-cover w-full h-full" />
      </div>
      <div>
        <div>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </div>
        <div>
          {blog.platform === "medium" ? (
            <div>View post on Medium</div>
          ) : blog.platform === "vonage" ? (
            <div>View post on Vonage</div>
          ) : null}

          <div>{/* add tags here */}</div>
        </div>
      </div>
    </CardContainer>
  )
}

export default BlogCard
