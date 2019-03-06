import styled from 'react-emotion'

const Text = styled('div')({
  fontFamily: 'Benton Sans,Helvetica,"Sans-serif"',
  color: '#2a2a2a'
})

const Heading = styled(Text)({
  fontSize: 36
})

const Link = styled(Text)({
  display: 'flex',
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
    color: '#E51075 !important'
  }
})

Text.Heading = Heading
Text.Link = Link

export default Text
