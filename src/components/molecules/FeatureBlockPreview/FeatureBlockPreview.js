import React from 'react'
import { FeatureBlock } from '../../atoms'
import styled, { cx } from 'react-emotion'

const featureSet = [
  {
    title: 'Funding',
    description:
      "Indiegogo's crowdfunding campaigns and InDemand campaigns are where new and groundbreaking projects take flight.",
    linkText: 'BACK CAMPAIGNS',
    bgImage:
      'https://g1.iggcdn.com/assets/homepage/2x/funding-bg-desktop-lg-4ae292744735912f681da23d2b289e3d8e0e48580b301ed2db87c77426d0e8c7.jpg'
  },
  {
    title: 'Marketplace',
    description:
      'The marketplace is loaded with clever and surprising innovation in tech, design, and more — most of them shipping within a few days.',
    linkText: 'SHOP PRODUCTS',
    bgImage:
      'https://g0.iggcdn.com/assets/homepage/2x/marketplace-bg-desktop-lg-214ee01a448a0d10ec9bf5967b79257ad8a0967a1b155b3762149c9e2002fb85.jpg'
  }
]

const FeatureBlockPreview = styled(({ className }) => (
  <div className={cx('FeatureBlockPreview', className)}>
    {featureSet.map(({ title, description, linkText, bgImage }) => (
      <FeatureBlock
        title={title}
        description={description}
        linkText={linkText}
        bgImage={bgImage}
      />
    ))}
  </div>
))({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  margin: '45px 20px 0 20px',
  gridGap: 30
})

export default FeatureBlockPreview
