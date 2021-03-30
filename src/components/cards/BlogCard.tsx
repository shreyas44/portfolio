import React from "react"
import styled from "styled-components"
import GitHub from "../../icons/github"
import Medium from "../../icons/medium"
import Vonage from "../../icons/vonage"
import { BlogData } from "../../lib/blogs"
import { getFormattedTime } from "../../utils"
import CardContainer from "./CardContainer"
import Tag from "./Tag"

interface Props {
  blog: BlogData
}

const PlatformContainer = styled.div`
  &:hover::after {
    content: "";
    height: 1px;
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    background-color: black;
  }
`

const BlogCard: React.FC<Props> = ({ blog }) => {
  const tags = blog.tags.map((tag) => <Tag key={tag} tag={tag} />)
  const timestamp = getFormattedTime(blog.timestamp * 1000)

  return (
    <CardContainer className="overflow-hidden shadow-md cursor-pointer w-80 rounded-xl hover:shadow-xl">
      <div className="w-full h-1/2">
        <img src={`/${blog.image}`} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-between p-3 h-1/2">
        <div className="space-y-1">
          <h3 className="text-2xl">{blog.title}</h3>
          <div className="text-sm text-gray-400">{timestamp}</div>
          {/* <p>{blog.description}</p> */}
        </div>
        <div className="flex flex-col gap-y-1">
          <a href={blog.url}>
            {blog.platform === "medium" ? (
              <PlatformContainer className="relative flex items-center text-sm gap-x-2 w-content">
                <div>View post on</div>
                <div className="flex items-center font-mono gap-x-0.5">
                  <div className="w-5 h-5">
                    <Medium />
                  </div>
                  <div>Medium</div>
                </div>
                <div>&rarr;</div>
              </PlatformContainer>
            ) : blog.platform === "vonage" ? (
              <PlatformContainer className="relative flex items-center text-sm gap-x-1.5 w-content">
                <div>View post on</div>
                <div className="flex items-center font-mono text-sm gap-x-0">
                  <div className="w-4 h-4">
                    <Vonage />
                  </div>
                  <div>onage</div>
                </div>
                <div>&rarr;</div>
              </PlatformContainer>
            ) : null}
          </a>
          <div className="flex flex-wrap gap-1">{tags}</div>
        </div>
      </div>
    </CardContainer>
  )
}

export default BlogCard
