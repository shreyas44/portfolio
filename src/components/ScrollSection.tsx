import styled from "styled-components"

const StyledDiv = styled.div`
  scroll-snap-align: center;
`

interface Props {
  id?: string
}

const ScrollSection: React.FC<Props> = ({ children, id }) => (
  <StyledDiv id={id} className="w-full h-screen">
    {children}
  </StyledDiv>
)

export default ScrollSection
