import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Text } from '..'
import { StyledFeaturedProjectBlock } from './styled'

const FeaturedDescriptionProjectBlock = ({
  title,
  description,
  position,
  total,
  onButtonClick
}) => (
  <StyledFeaturedProjectBlock>
    <div className={'feature-description-block'}>
      <div className={'feature-description-content'}>
        <a href="#">
          <Text>FEATURED</Text>
        </a>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text.Link>SEE CAMPAIGN</Text.Link>
      </div>
      <div className={'feature-description-navArrow'}>
        <div className={'icon'} onClick={() => onButtonClick('back')}>
          <IoIosArrowBack />
        </div>
        <div className={'icon'} onClick={() => onButtonClick('next')}>
          <IoIosArrowForward />
        </div>
        <Text>
          {position} / {total}
        </Text>
      </div>
    </div>
  </StyledFeaturedProjectBlock>
)

export default FeaturedDescriptionProjectBlock
