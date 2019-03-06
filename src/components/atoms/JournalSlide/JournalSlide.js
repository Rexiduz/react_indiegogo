import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import styled, { cx } from 'react-emotion'
import { Text } from '../../atoms'

const contents = [
  {
    header: 'Changing the Conversation: SpeakSee Wins $50K',
    description: 'Arrow Electronics awarded SpeakSee their flash funding prize',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1537814641/dzvklfgqrgxyiqfx5cau.png'
  },
  {
    header: 'Robotic Limbs For Amputees',
    description:
      'This teen scientist is augmenting the human body, one robotic limb at a time.',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1519863823/uqow4uz5mh87ph2xceme.jpg'
  },
  {
    header: 'How Two College Students Found A New Superfood in Beer',
    description:
      'From beer to bread, these entrepreneurs found nutrition in unlikely places.',
    imageUrl:
      'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1520907458/c4fnr60mqlxfhzvjv3hq.jpg'
  }
]

const JournalBlock = styled(({ className, imageUrl, description, header }) => (
  <div className={cx('JournalBlock', className)}>
    <img src={imageUrl} alt={'journal-images'} />
    <Text className={'journal-block-title'}>{header}</Text>
    <Text className={'journal-block-des'}>{description}</Text>
    <Text.Link>
      read now <FaAngleRight />
    </Text.Link>
  </div>
))({
  position: 'relative',
  width: 380,
  img: {
    height: 253,
    ':hover': {
      cursor: 'pointer'
    }
  },
  '.journal-block-title': {
    marginTop: 16,
    fontSize: 16,
    color: '#2a2a2a'
  },
  '.journal-block-des': {
    marginTop: 3,
    color: '#6a6a6a',
    fontSize: 14
  },
  'div:last-child': {
    marginTop: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12
  }
})

const JournalSlide = styled(({ className }) => (
  <div className={cx('JournalSlide', className)}>
    {contents.map(({ header, description, imageUrl }) => (
      <JournalBlock
        header={header}
        description={description}
        imageUrl={imageUrl}
      />
    ))}
  </div>
))({
  marginTop: 80,
  marginBottom: 60,
  display: 'grid',
  gridTemplateColumns: 'auto auto auto'
})

export default JournalSlide
