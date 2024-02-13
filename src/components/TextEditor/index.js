// TextEditor.js
import {useState} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'
import {
  Container,
  MainHeading,
  Image,
  ButtonList,
  ButtonListItem,
  Button,
  StyledTextArea,
} from './stylesComponents'

const TextEditor = () => {
  const [boldActive, setBoldActive] = useState(false)
  const [italicActive, setItalicActive] = useState(false)
  const [underlineActive, setUnderlineActive] = useState(false)

  const handleBoldClick = () => {
    setBoldActive(prevState => !prevState)
  }

  const handleItalicClick = () => {
    setItalicActive(prevState => !prevState)
  }

  const handleUnderlineClick = () => {
    setUnderlineActive(prevState => !prevState)
  }

  return (
    <Container>
      <MainHeading>Text Editor</MainHeading>
      <Image src="your-image-url.jpg" alt="text editor" />
      <ButtonList>
        <ButtonListItem>
          <Button
            active={boldActive}
            onClick={handleBoldClick}
            data-testid="bold"
          >
            <VscBold />
          </Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button
            active={italicActive}
            onClick={handleItalicClick}
            data-testid="italic"
          >
            <GoItalic />
          </Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button
            active={underlineActive}
            onClick={handleUnderlineClick}
            data-testid="underline"
          >
            <AiOutlineUnderline />
          </Button>
        </ButtonListItem>
      </ButtonList>
      <StyledTextArea
        boldActive={boldActive}
        italicActive={italicActive}
        underlineActive={underlineActive}
      />
    </Container>
  )
}

export default TextEditor
