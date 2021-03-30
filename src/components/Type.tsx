import { useRef, useState } from "react"
import styled from "styled-components"
import useInterval from "../hooks/useInterval"

interface Props {
  text: string
}

const Type: React.FC<Props> = (props) => {
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const waitCounter = useRef(0)

  const lines = props.text.split("\n")
  const isTypingComplete =
    currentLine + 1 == lines.length &&
    currentCharacter + 1 == lines[currentLine].length

  useInterval(
    () => {
      if (currentCharacter === lines[currentLine].length - 1) {
        if (waitCounter.current === 10) {
          setCurrentCharacter(0)
          setCurrentLine((currentLine) => currentLine + 1)
          setShowCursor(true)

          waitCounter.current = 0
        } else if (waitCounter.current % 4 === 0) {
          setShowCursor((showCursor) => !showCursor)
        }

        waitCounter.current += 1
      } else if (showCursor) {
        setCurrentCharacter((currentCharacter) => currentCharacter + 1)
      }
    },
    !isTypingComplete ? 50 : null
  )

  const linesToShow = lines.slice(0, currentLine)
  const renderedLines = linesToShow.map((line, index) => (
    <Span key={index}>{line}</Span>
  ))

  const textToShow = lines[currentLine].slice(0, currentCharacter + 1)

  return (
    <div className="flex flex-col items-center">
      {renderedLines}
      <Span>
        {textToShow}
        {showCursor && <Cursor className="inline-block h-8 bg-black" />}
      </Span>
    </div>
  )
}

const Cursor = styled.div`
  width: 1px;
`

const Span: React.FC = (props) => (
  <span className="flex items-center text-2xl text-black">
    {props.children}
  </span>
)

export default Type
