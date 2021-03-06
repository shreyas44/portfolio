import { useEffect, useState } from "react"
import GitHub from "../../icons/github"
import Medium from "../../icons/medium"
import Twitter from "../../icons/twitter"
import SectionLink from "./SectionLink"

const IconContainer = (props) => (
  <div className="text-gray-700 fill-current w-7 h-7 hover:text-black">
    {props.children}
  </div>
)

const NavBar: React.FC = (props) => {
  const [currentActive, setCurrentActive] = useState<
    "intro" | "projects" | "blog" | "contact"
  >("intro")

  useEffect(() => {
    const ids = ["intro", "projects", "blog", "contact"]
    const nodes = ids.map((id) => document.getElementById(id))

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.55,
    }

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setCurrentActive(
            entry.target.id as "intro" | "projects" | "blog" | "contact"
          )
      })
    }

    let observer = new IntersectionObserver(callback, observerOptions)
    nodes.map((node) => observer.observe(node))
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white">
      <div className="flex items-center gap-x-3">
        <SectionLink href="#intro" isActive={currentActive === "intro"}>
          Intro
        </SectionLink>
        <SectionLink href="#projects" isActive={currentActive === "projects"}>
          Projects
        </SectionLink>
        <SectionLink href="#blog" isActive={currentActive === "blog"}>
          Blog
        </SectionLink>
        <SectionLink href="#contact" isActive={currentActive === "contact"}>
          Contact
        </SectionLink>
        {/* <SectionLink href="#resume" isActive={false}>
          Resume
        </SectionLink> */}
      </div>
      <div className="flex gap-x-3">
        <a href="https://twitter.com/shreyas4_">
          <IconContainer>
            <Twitter />
          </IconContainer>
        </a>
        <a href="https://github.com/shreyas44">
          <IconContainer>
            <GitHub />
          </IconContainer>
        </a>
        <a href="https://shreyas44.medium.com">
          <IconContainer>
            <Medium />
          </IconContainer>
        </a>
      </div>
    </nav>
  )
}

export default NavBar
