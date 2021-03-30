import { ProjectData } from "../lib/projects"
import ProjectCard from "./cards/ProjectCard"

interface Props {
  projects: ProjectData[]
}

const Projects: React.FC<Props> = ({ projects }) => {
  const renderedProjects = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))

  return (
    <div className="flex items-center justify-center w-full h-full overflow-visible">
      <div className="w-10/12 px-5 py-10 m-auto overflow-x-scroll overflow-y-visible">
        <div className="flex overflow-y-visible w-content gap-x-6">
          {renderedProjects}
        </div>
      </div>
    </div>
  )
}

export default Projects
