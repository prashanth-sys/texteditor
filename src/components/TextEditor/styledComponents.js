import styled from 'styled-components'

export const Container = styled.div`
  background-color: #25262c;
  padding: 20px;
  background-size: cover;
  height: 100vh;
`

export const MainHeading = styled.h1`
  color: #ffffff;
`

export const Image = styled.img`
  width: 100px;
`

export const ButtonList = styled.ul`
  list-style: none;
  padding: 0;
`

export const ButtonListItem = styled.li`
  margin-right: 10px;
  display: inline-block;
`

export const Button = styled.button`
  background-color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  border: none;
  padding: 5px;
  cursor: pointer;
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 16px;
  font-weight: ${props => (props.boldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.italicActive ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlineActive ? 'underline' : 'none')};
`
