import React from 'react'
import styled, { cx } from 'react-emotion'
import { Text } from '../../atoms'

const HeadingWithLabel = styled(({ className, header, label }) => (
  <div className={cx('HeadingWithLabel', className)}>
    <Text className={'heading-with-label-header'}>{header}</Text>
    <Text className={'heading-with-label-label'}>{label}</Text>
  </div>
))({
  textAlign: 'center',
  fontSize: 30,
  '> div': {
    ':last-child': {
      fontSize: 16,
      margin: '20px 0 20px 0'
    }
  }
})

export default HeadingWithLabel
