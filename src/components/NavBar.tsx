import Link from "next/link"
import GitHub from "../icons/github"
import Medium from "../icons/medium"
import Twitter from "../icons/twitter"

const IconContainer = (props) => (
  <div className="text-gray-700 fill-current w-7 h-7 hover:text-black">
    {props.children}
  </div>
)

const NavBar: React.FC = (props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center mx-8 mt-6 bg-white">
      <div className="absolute top-0 left-0 flex items-center gap-x-3">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#blog" className="hover:underline">
          Blog
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <Link href="/resume">
          <a className="hover:underline">Resume</a>
        </Link>
      </div>
      <div className="absolute top-0 right-0 flex gap-x-3">
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
        <a href="https://shreyas-sreenivas.medium.com">
          <IconContainer>
            <Medium />
          </IconContainer>
        </a>
      </div>
    </nav>
  )
}

export default NavBar
