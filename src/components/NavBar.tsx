import styled from "styled-components"
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
    <nav className="fixed top-0 right-0 flex items-center mt-6 mr-8 gap-x-3">
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
    </nav>
  )
}

export default NavBar
