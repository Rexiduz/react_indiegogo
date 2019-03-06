import React from 'react'
import { Text } from '../../atoms'
import styled, { cx } from 'react-emotion'
import { FaAngleRight } from 'react-icons/fa'

const contents = [
  {
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1539031915/cxbabndqotou6u5wpnct.jpg',
    heading: '10 Cool & Clever Finds',
    description: 'Our roundup of standout projects',
    linkLabel: 'SEE THE COLLECTION'
  },
  {
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1539031882/gkqhstldjw1vbbl6kctm.jpg',
    heading: 'Team Favorites',
    description: 'ATOM smartphone gimbal & more team favorites',
    linkLabel: 'SEE THE COLLECTION'
  },
  {
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1538587077/whmx0i5tcvbje1glou8m.png',

    heading: 'Funded in America',
    description:
      "Check out some of Indiegogo's most inspiring female entrepreneurs",
    linkLabel: 'WATCH NOW'
  },
  {
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1536878466/twunlgsg2tvd3cywzgwv.png',
    heading: 'Investment Opportunities',
    description: 'Zeehaus and more great companies',
    linkLabel: 'LEARN MORE'
  }
]

const CollectionItem = styled(
  ({ className, heading, description, linkLabel }) => (
    <div className={('CollectionItem', className)}>
      <div className={'collection-heading'}>
        <div className={'collection-bg'}>
          <Text>{heading}</Text>
        </div>
      </div>
      <div className={'collection-container'}>
        <Text>{description}</Text>
        <Text.Link>
          {linkLabel} <FaAngleRight />
        </Text.Link>
      </div>
    </div>
  )
)(({ imageUrl }) => ({
  padding: '0 15px 20px 15px',
  width: '100%',
  '.collection-heading': {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: 12,
    height: 393,
    position: 'relative',
    zIndex: 0,
    '.collection-bg': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ':hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.26)'
      },
      '> div': {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        zIndex: 1
      }
    }
  },
  '.collection-container': {
    display: 'flex',
    justifyContent: 'space-between',
    '> div': {
      fontSize: 14,
      fontWeight: 400,
      ':last-child': {
        fontSize: 12,
        fontWeight: 'bold'
      }
    }
  }
}))

const ProductCollection = styled(({ className }) => (
  <div className={cx('CollectionProduct', className)}>
    {contents.map(({ heading, imageUrl, linkLabel, description }) => (
      <CollectionItem
        heading={heading}
        imageUrl={imageUrl}
        description={description}
        linkLabel={linkLabel}
      />
    ))}
  </div>
))({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: 30
})

export default ProductCollection
