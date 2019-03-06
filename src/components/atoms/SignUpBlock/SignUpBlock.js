import React from 'react'
import styled, { cx } from 'react-emotion'
import { Text, Button } from '../../atoms'

const StyledSignUpBlock = styled('div')({
  background: '#ffff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 470,
  height: 258,
  top: 80,
  position: 'absolute',
  right: 0,
  zIndex: 1,
  textAlign: 'left',
  padding: '30px 85px 40px 40px',
  '.find-in-first-title': {
    marginTop: '.67em',
    marginBottom: 20
  },
  '.find-in-first-des': {
    marginBottom: 25,
    lineHeight: 1.5
  },
  '.find-in-first-action': {
    height: 55,
    display: 'flex',
    alignItems: 'flex-end',
    '> div': {
      marginRight: 15
    }
  }
})

const SignUpBlock = ({ className }) => (
  <StyledSignUpBlock className={cx('SignUpBlock', className)}>
    <div className={'find-in-first-title'}>
      <Text.Heading>Find it first on Indiegogo.</Text.Heading>
    </div>
    <div className={'find-in-first-des'}>
      <Text>
        Discover innovations in tech and design before they go mainstream,
        including hundreds of products shipping right away.
      </Text>
    </div>
    <div className={'find-in-first-action'}>
      <Button>SIGN UP NOW</Button>
      <Button mono>LEARN MORE</Button>
    </div>
  </StyledSignUpBlock>
)

export default SignUpBlock
