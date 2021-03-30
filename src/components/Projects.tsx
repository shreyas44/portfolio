import styled from "styled-components"
import { ProjectData } from "../lib/projects"
import ProjectCard from "./cards/ProjectCard"

interface Props {
  projects: ProjectData[]
}

const ProjectsContainer = styled.div<{ $columns: number }>`
  scroll-snap-type: x mandatory;
`
const Projects: React.FC<Props> = ({ projects }) => {
  const renderedProjects = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))

  return (
    <div className="flex items-center justify-center w-full h-full overflow-visible">
      <ProjectsContainer
        className="flex w-11/12 px-5 py-10 m-auto space-x-6 overflow-x-auto overflow-y-visible md:w-10/12"
        $columns={4}
      >
        {renderedProjects}
      </ProjectsContainer>
    </div>
  )
}

export default Projects
