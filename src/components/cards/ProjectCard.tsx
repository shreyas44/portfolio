import GitHub from "../../icons/github"
import { ProjectData } from "../../lib/projects"
import CardContainer from "./CardContainer"

interface Props {
  project: ProjectData
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <CardContainer className="overflow-hidden shadow-md cursor-pointer w-80 rounded-xl hover:shadow-xl">
      <div className="w-full h-1/2">
        <img src={`/${project.image}`} className="object-cover w-full h-full" />
      </div>
      <div>
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div>
          {project.repository && (
            <div>
              <div className="w-4 h-4">
                <GitHub />
              </div>
              <div>{project.repository}</div>
            </div>
          )}

          <div>{/* add tags here */}</div>
        </div>
      </div>
    </CardContainer>
  )
}

export default ProjectCard
