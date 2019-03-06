import React, { Component } from 'react'
import { cx } from 'react-emotion'
import {
  SlideShow,
  ProductCollection,
  HeadingWithLabel,
  Button,
  Text,
  CategorySlide,
  JournalSlide
} from '../components/atoms'
import {
  AppBar,
  FeatureBlockPreview,
  Footer,
  FeaturePreviewer
} from '../components/molecules'
import { StyledHomePage, StyledCenterHorizontal } from './StyledComponents'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appBarOpen: false
    }
  }

  render() {
    const { className } = this.props
    return (
      <StyledHomePage
        className={cx(
          'StyledHomePage',
          `${this.state.appBarOpen ? 'lock-scroll' : ''}`,
          className
        )}
      >
        <AppBar appBarOpen={state => this.setState({ appBarOpen: state })} />
        <FeaturePreviewer />
        <div className={'container'}>
          <FeatureBlockPreview />
          <SlideShow />
          <ProductCollection />
          <HeadingWithLabel
            className={'content-which-interest'}
            header={'Which categories interest you?'}
            label={
              'Discover projects just for you and get great recommendations when you select your interests.'
            }
          />
          <StyledCenterHorizontal>
            <Button
              className={'button-sign-up-interest'}
              mono
              baseColor={'#2a2a2a'}
            >
              Sign up and select interests
            </Button>
            <Text>Or explore our top categories</Text>
          </StyledCenterHorizontal>
          <CategorySlide />
          <HeadingWithLabel
            className={'content-from-journal'}
            header={'From the Journal'}
            label={
              'Your behind-the-scenes view of the people and stories behind Indiegogo projects'
            }
          />
          <JournalSlide />
          <div className={'claver-think'}>
            <img
              className={'claver-think-image'}
              alt={'img-claver'}
              src={
                'https://indiegogo-media-prod-cld-res.cloudinary.com/image/upload/homepage/crowdfunding-crowdsurfing_base.svg'
              }
            />
            <HeadingWithLabel
              header={
                <span>
                  Clever Things For Curious Humans
                  <span>TM</span>
                </span>
              }
              label={
                'There’s no better place to start the hunt for something new and special. Begin on Indiegogo to find clever and unconventional things that solve everyday problems large and small.'
              }
            />
            <div className={'claver-think-button-frame'}>
              <Button>sign up now</Button>
              <Button mono>learn more</Button>
            </div>
          </div>
        </div>
        <Footer />
      </StyledHomePage>
    )
  }
}

export default HomePage
