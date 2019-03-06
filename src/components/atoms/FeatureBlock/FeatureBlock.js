import React from 'react'
import styled from 'react-emotion'
import { IoIosArrowForward } from 'react-icons/io'
import { MdLocalShipping } from 'react-icons/md'
import { Text } from '../../atoms'

const StyledFeatureBlock = styled('div')(({ bgImage }) => ({
  backgroundImage: `url("${bgImage}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: 552,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  div: {
    textAlign: 'center',
    ':nth-child(1)': {
      fontSize: 32,
      marginBottom: 20
    },
    ':nth-child(3)': {
      fontSize: 14,
      marginBottom: 20,
      padding: '0 25px 0 25px'
    },
    ':nth-child(4)': {
      fontWeight: 'bold',
      fontSize: 12,
      color: '#2a2a2a',
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '> svg': {
        fontSize: 16
      }
    }
  }
}))

const FundingBar = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        backgroundColor: '#dddddd',
        margin: '0 30px',
        height: 7,
        width: '50%',
        borderRadius: 5,
        position: 'relative',
        marginBottom: 20
      }}
    >
      <div
        style={{
          position: 'absolute',
          borderRadius: '5px 0 0 5px',
          width: '78%',
          top: 0,
          left: 0,
          height: 7,
          backgroundColor: '#35CA97'
        }}
      />
    </div>
  </div>
)

const MarketPlace = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    }}
  >
    <MdLocalShipping color={'#ECA200'} />
    <Text
      style={{
        color: '#ECA200',
        fontSize: 10,
        marginLeft: 12,
        textTransform: 'uppercase',
        letterSpacing: 1
      }}
    >
      SHIPPING GUARANTEED
    </Text>
  </div>
)

const FeatureBlock = ({ title, linkText, description, bgImage }) => (
  <StyledFeatureBlock bgImage={bgImage}>
    <Text>{title}</Text>
    {title === 'Funding' ? <FundingBar /> : <MarketPlace />}
    <Text>{description}</Text>
    <Text.Link>
      {linkText}
      <IoIosArrowForward />
    </Text.Link>
  </StyledFeatureBlock>
)

export default FeatureBlock
