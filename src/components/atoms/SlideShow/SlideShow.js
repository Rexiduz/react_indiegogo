import React from 'react'
import styled, { cx } from 'react-emotion'
import { FaLightbulb, FaKey, FaCertificate } from 'react-icons/fa'

const content = [
  {
    icon: <FaLightbulb />,
    header: 'Innovation starts here',
    description:
      'With both crowdfunding campaigns and products shipping now, Indiegogo is the source for ingenious products that help your life run smoothly.'
  },
  {
    icon: <FaKey />,
    header: 'The earliest access',
    description:
      'With Indiegogo’s crowdfunding campaigns, discover and back buzz-worthy tech and design products well before they hit the mainstream.'
  },
  {
    icon: <FaCertificate />,
    header: 'Marketplace guarantee',
    description:
      'Indiegogo’s Product Marketplace is loaded with clever and unconventional products that are guaranteed to ship on time or you’ll get your money back.'
  }
]

const SlideItem = styled(({ className, header, description, icon }) => (
  <div className={cx('SlideItem', className)}>
    {icon}
    <div className={'slide-item-header'}>{header}</div>
    <div className={'slide-item-des'}>{description}</div>
  </div>
))(({ header }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  '.slide-item-header': {
    fontWeight: 'bold',
    marginBottom: 12
  },
  '.slide-item-des': {
    padding: '0 10px 0 10px',
    fontWeight: 200,
    fontSize: 14
  },
  svg: {
    width: 45,
    height: 45,
    color: '#E51075',
    marginBottom: 15,
    transform: `${
      header === 'Innovation starts here' ? 'rotate(-45deg)' : 'rotate(-90deg)'
    }`
  }
}))

const SlideShow = styled(({ className }) => (
  <div className={cx('SlideShow', className)}>
    {content.map(({ header, description, icon }) => (
      <SlideItem header={header} description={description} icon={icon} />
    ))}
  </div>
))({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  margin: '70px 0 70px 0'
})

export default SlideShow
