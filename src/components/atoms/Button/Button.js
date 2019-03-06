import React from 'react'
import styled from 'react-emotion'
import { Text } from '../../atoms'

const StyledButton = styled('div')(({ mono, baseColor = '#E51075' }) => ({
  button: {
    fontSize: 14,
    textTransform: 'uppercase',
    cursor: 'pointer',
    letterSpacing: 1,
    backgroundColor: mono ? '#fff' : baseColor,
    border: `2px solid ${baseColor}`,
    padding: '11px 18px',
    borderRadius: 2,
    ':focus': {
      outline: 'none'
    },
    ':hover': {
      backgroundColor: mono ? baseColor : '#fa1681',
      borderColor: mono ? baseColor : '#fa1681',
      color: '#ffffff',
      '> div': {
        color: '#ffffff'
      }
    },
    '> div': {
      color: mono ? baseColor : '#fff',
      textAlign: 'center',
      fontWeight: 800
    }
  }
}))
const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    <button>
      <Text>{children}</Text>
    </button>
  </StyledButton>
)

export default Button
