import { FiLink } from "react-icons/fi"
import GitHub from "../../icons/github"
import { ProjectData } from "../../lib/projects"
import CardContainer from "./CardContainer"
import Tag from "./Tag"

interface Props {
  project: ProjectData
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const tags = project.tags.map((tag) => <Tag key={tag} tag={tag} />)

  return (
    <CardContainer className="overflow-hidden shadow-md cursor-pointer w-80 rounded-xl hover:shadow-xl">
      <div className="w-full h-1/2">
        <img src={`/${project.image}`} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-between p-3 h-1/2">
        <div className="space-y-1">
          <h3 className="text-2xl">{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div className="flex flex-col gap-y-1">
          {project.repository && (
            <a href={`https://github.com/${project.repository}`}>
              <div className="flex items-center text-sm underline gap-x-2">
                <div className="w-4 h-4">
                  <GitHub />
                </div>
                <div>{project.repository}</div>
              </div>
            </a>
          )}

          <div className="flex flex-wrap gap-1">{tags}</div>
        </div>
      </div>
    </CardContainer>
  )
}

export default ProjectCard
