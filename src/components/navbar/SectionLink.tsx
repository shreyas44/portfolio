import styled from "styled-components"

interface Props {
  isActive: boolean
  href: string
}

const StyledLink = styled.a<{ $isActive: boolean }>`
  &::after {
    ${(props) => (props.$isActive ? "content: '';" : "")}
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 4px;
    background-color: black;
  }

  &::before {
    content: "${(props) => props.children.toString()}";
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: bold;

    @media speech {
      display: none;
    }
  }
`

const SectionLink: React.FC<Props> = (props) => {
  return (
    <StyledLink
      href={props.href}
      className={`md:flex md:flex-col md:items-center before:hidden md:before:block ${
        props.isActive ? "font-bold relative" : "hidden hover:underline"
      }`}
      $isActive={props.isActive}
    >
      {props.children}
    </StyledLink>
  )
}

export default SectionLink
