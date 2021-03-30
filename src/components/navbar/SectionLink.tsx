import styled from "styled-components"

interface Props {
  isActive: boolean
  href: string
}

const StyledLink = styled.a<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

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
      className={props.isActive ? "font-bold relative" : "hover:underline"}
      $isActive={props.isActive}
    >
      {props.children}
    </StyledLink>
  )
}

export default SectionLink
