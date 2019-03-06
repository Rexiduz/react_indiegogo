import React from 'react'
import styled, { cx } from 'react-emotion'
import { Text } from '../../atoms'
import {
  IoIosHome,
  IoIosPhonePortrait,
  IoIosFitness,
  IoMdCamera,
  IoIosBicycle
} from 'react-icons/io'
import { FaVolumeUp } from 'react-icons/fa'

const contents = [
  {
    icon: <IoIosHome />,
    label: 'home'
  },
  {
    icon: <IoIosPhonePortrait />,
    label: 'Phones & Accessories'
  },
  {
    icon: <IoIosBicycle />,
    label: 'Travel & Outdoors'
  },
  {
    icon: <IoIosFitness />,
    label: 'Health & Fitness'
  },
  {
    icon: <FaVolumeUp />,
    label: 'audio'
  },
  {
    icon: <IoMdCamera />,
    label: 'film'
  }
]
const CategoryBlock = styled(({ className, icon, label }) => (
  <div className={cx('CategorySlide', className)}>
    <div>
      <div>{icon}</div>
      <Text>{label}</Text>
    </div>
  </div>
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
    fontSize: 12,
    fontWeight: 600,
    textAlign: 'center',
    position: 'absolute',
    whiteSpace: 'nowrap',
    margin: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    svg: {
      width: 60,
      height: 60,
      color: '#E51075',
      marginBottom: 15
    }
  }
})

const CategorySlide = styled(({ className }) => (
  <div className={cx('CategorySlide', className)}>
    {contents.map(({ icon, label }) => (
      <CategoryBlock icon={icon} label={label} />
    ))}
  </div>
))({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto',
  textAlign: 'center',
  marginBottom: 20
})

export default CategorySlide
