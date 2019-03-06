import React, { Component } from 'react'
import styled from 'react-emotion'
import { SignUpBlock, FeaturedDescriptionProjectBlock } from '../../atoms'

export const FeaturePreview = styled('div')(({ imageUrl }) => ({
  ':before': {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))`,
    content: `''`
  },
  transition: 'background-image 0.4s ease-in-out 0.2s',
  height: 468,
  position: 'relative',
  backgroundImage: `url("${imageUrl}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}))

const contents = [
  {
    title: 'The Live Outdoor Reality Rower',
    description: 'HYDROW lets you row in real time with world class athletes',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1538593610/ohyiyckd3qyuxw27sn9d.jpg'
  },
  {
    title: 'Bluetooth 5.0 Earbuds with Wireless Charging',
    description:
      'PaMu Scroll is back with new features and an early bird price of $39',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1536781432/lfwbeu1rnupuw84utmyg.jpg'
  },
  {
    title: 'Add A Splash of Creativity to Your Day',
    description:
      'A new, premium LEGO experience to help you re-engage with your creative side',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1537994202/uzms9az2i7rajnuo8jlw.jpg'
  },
  {
    title: 'The Coolest Gokart Ever',
    description:
      'The Ninebot Electric Gokart transforms your Segway to a drifting machine',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1537824932/zlga3ssd8psmdb40x1tt.jpg'
  },
  {
    title: 'An Equity Sharing Marketplace',
    description: 'Zeehaus uses blockchain to create a marketplace for everyone',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1538417892/yuxz4smqefssyuewvgzj.jpg'
  }
]

class FeaturePreviewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: contents[0].title,
      description: contents[0].description,
      imageUrl: contents[0].imageUrl,
      position: 1,
      total: 5
    }
    this.intervalId = null
  }

  setDataPreview = (position, callback) => {
    this.setState(
      {
        title: contents[position].title,
        description: contents[position].description,
        imageUrl: contents[position].imageUrl,
        position: position + 1
      },
      callback
    )
  }

  renderSlide = () => {
    const { position: state } = this.state
    let position = state - 1
    this.intervalId = setInterval(
      () =>
        this.setDataPreview(position, () => {
          position = position === 4 ? 0 : position + 1
        }),
      6000
    )
  }

  componentDidMount = () => this.renderSlide()

  onButtonClick = key => {
    const { position } = this.state
    const realPosition = position - 1
    const condition =
      key === 'next'
        ? position === 5
          ? 0
          : realPosition + 1
        : position === 1
          ? 4
          : realPosition - 1
    clearInterval(this.intervalId)
    this.setDataPreview(condition, () => this.renderSlide())
  }

  render() {
    const { title, description, imageUrl, position, total } = this.state
    return (
      <FeaturePreview imageUrl={imageUrl}>
        <div className={'container'}>
          <FeaturedDescriptionProjectBlock
            title={title}
            description={description}
            position={position}
            total={total}
            onButtonClick={this.onButtonClick}
          />
          <SignUpBlock />
        </div>
      </FeaturePreview>
    )
  }
}

export default FeaturePreviewer
