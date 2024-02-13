import {Component} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'
import {
  Container,
  MainHeading,
  Image,
  ButtonList,
  ButtonListItem,
  Button,
  StyledTextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
  }

  handleBoldClick = () => {
    this.setState(prevState => ({boldActive: !prevState.boldActive}))
  }

  handleItalicClick = () => {
    this.setState(prevState => ({italicActive: !prevState.italicActive}))
  }

  handleUnderlineClick = () => {
    this.setState(prevState => ({underlineActive: !prevState.underlineActive}))
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state

    return (
      <Container>
        <MainHeading>Text Editor</MainHeading>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ButtonList>
          <ButtonListItem>
            <Button
              active={boldActive}
              onClick={this.handleBoldClick}
              data-testid="bold"
            >
              <VscBold />
            </Button>
          </ButtonListItem>
          <ButtonListItem>
            <Button
              active={italicActive}
              onClick={this.handleItalicClick}
              data-testid="italic"
            >
              <GoItalic />
            </Button>
          </ButtonListItem>
          <ButtonListItem>
            <Button
              active={underlineActive}
              onClick={this.handleUnderlineClick}
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
}

export default TextEditor
