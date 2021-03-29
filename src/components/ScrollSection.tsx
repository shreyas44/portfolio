import styled from "styled-components"

const StyledDiv = styled.div`
  scroll-snap-align: center;
`

const ScrollSection: React.FC = (props) => (
  <StyledDiv className="w-full h-screen">{props.children}</StyledDiv>
)

export default ScrollSection
