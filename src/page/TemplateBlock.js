import React from 'react'
import styled, { cx } from 'react-emotion'

const JournalBlock = styled(({ className }) => (
  <div className={cx('JournalBlock', className)}>hello</div>
))({
  position: 'relative',
  width: 170,
  height: 170,
  margin: 'auto',
  ':hover': {
    backgroundColor: '#f5f5f5',
    cursor: 'pointer'
  },
  '> div': {
    textAlign: 'center',
    position: 'absolute',
    margin: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

const JournalSlide = styled(({ className }) => (
  <div className={cx('JournalSlide', className)}>hello</div>
))({})

export default JournalSlide
