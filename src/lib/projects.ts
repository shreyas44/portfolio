import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface ProjectData {
  id: string
  name: string
  description: string
  url: string
  repository: string
  image: string
  tags: string[]
}

const projectsDir = path.join(process.cwd(), "src", "content", "projects")

export const getProjects = () => {
  const fileNames = fs.readdirSync(projectsDir)

  const projectsData: ProjectData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(projectsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return { id, ...matterResult.data } as ProjectData
  })

  return projectsData
}
