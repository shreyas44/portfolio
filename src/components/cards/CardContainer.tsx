import styled from "styled-components"

const StyledDiv = styled.div`
  height: 65vh;
  scroll-snap-align: center;

  @media (min-width: 640px) {
    height: 61vh;
  }
`

const CardContainer: React.FC = (props) => {
  return (
    <StyledDiv className="flex-shrink-0 overflow-hidden shadow-md w-80 rounded-xl hover:shadow-lg">
      {props.children}
    </StyledDiv>
  )
}

export default CardContainer
