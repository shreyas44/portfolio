import fs from "fs"
import path from "path"
import matter from "gray-matter"

type BlogPlatform = "medium" | "vonage"

export interface BlogData {
  id: string
  title: string
  description: string
  url: string
  image: string
  platform: BlogPlatform
  tags: string[]
  timestamp: number
}

const blogsDir = path.join(process.cwd(), "src", "content", "blog")

export const getBlogs = () => {
  const fileNames = fs.readdirSync(blogsDir)

  const blogsData: BlogData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(blogsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return { id, ...matterResult.data } as BlogData
  })

  blogsData.sort((a, b) => b.timestamp - a.timestamp)

  return blogsData
}
