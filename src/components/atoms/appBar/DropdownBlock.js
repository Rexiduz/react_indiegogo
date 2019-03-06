import React from 'react'
import styled, { cx } from 'react-emotion'
import { Text } from '../../atoms'
import { FaAngleRight } from 'react-icons/fa'
import { contents, menuList } from './mock'
import {
  StyledExploreContentCardWithLink,
  StyledExploreContentBlock
} from './StyledComponents'

const ExploreContentCard = ({ title, linkLabel, middle, imageUrl }) => (
  <StyledExploreContentCardWithLink
    className={cx('ExploreContentCard')}
    imageUrl={imageUrl}
    middle={middle}
  >
    <Text>{title}</Text>
    <div className={'explore-content-card-image'}>
      {linkLabel ? (
        <div>
          <Text>{middle}</Text>
          <Text>{linkLabel}</Text>
        </div>
      ) : null}
    </div>
  </StyledExploreContentCardWithLink>
)

const ExploreContentBlock = ({ className, clicked }) => (
  <StyledExploreContentBlock className={cx('ExploreContentBlock', className)}>
    <div
      className={`${
        clicked ? 'open-drop-down-content' : 'close-drop-down-content'
      }`}
    >
      <div className={`explore-content-block`}>
        <div>
          All project types <FaAngleRight />
        </div>
        <div>
          {contents.map(({ title, linkLabel, middle, imageUrl }) => (
            <ExploreContentCard
              title={title}
              linkLabel={linkLabel}
              middle={middle}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  </StyledExploreContentBlock>
)

const MenuListItem = styled(({ className, list, title }) => (
  <div className={cx('MenuListItem', className)}>
    <Text>{title}</Text>
    <div>
      <div className={'menu-list-item-list-frame'}>
        {list.map(item => (
          <Text>{item}</Text>
        ))}
      </div>
    </div>
  </div>
))({
  whiteSpace: 'nowrap',
  '>div': {
    ':first-child': {
      paddingLeft: 10,
      fontSize: '.875rem',
      fontWeight: 600,
      letterSpacing: 1,
      marginBottom: 20,
      lineHeight: '1.5em',
      textTransform: 'uppercase',
      ':hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }
  },
  '~ div': {
    '>div': {
      '>div': {
        paddingLeft: 10,
        borderLeft: '1px solid #ddd'
      }
    }
  },
  '.menu-list-item-list-frame': {
    display: 'grid',
    gridTemplateRows: 'auto auto auto auto auto ',
    gridTemplateColumns: 'auto auto',
    div: {
      lineHeight: '1.9em',
      fontSize: 14,
      ':hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }
  }
})

const MenuList = styled(({ className, clicked }) => (
  <div
    className={cx(
      'MenuList',
      clicked ? 'open-menu-list' : 'close-menu-list',
      className
    )}
  >
    <div>
      {menuList.map(({ list, title }) => (
        <MenuListItem list={list} title={title} />
      ))}
    </div>
  </div>
))({
  backgroundColor: '#f5f5f5',
  '> div': {
    margin: '0 auto',
    maxWidth: 1002,
    padding: '2.5rem 0',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  }
})

const DropdownBlock = styled(({ className, clicked }) => (
  <div
    className={cx(
      'DropdownBlock',
      `${clicked ? 'open-bg-drop-down-block' : 'close-bg-drop-down-block'}`,
      className
    )}
  >
    <ExploreContentBlock clicked={clicked} />
    <MenuList clicked={clicked} />
  </div>
))({
  backgroundColor: 'rgba(0,0,0,.6)',
  position: 'absolute',
  top: 60,
  width: '100%',
  height: '100vh',
  //NOTE: animation DROP background
  '&.open-bg-drop-down-block': {
    opacity: 1,
    zIndex: 20,
    animation: 'openBG 0.2s ease-in',
    '@keyframes openBG': {
      from: {
        zIndex: 0,
        opacity: 0
      },
      to: {
        zIndex: 20,
        opacity: 1
      }
    }
  },
  '&.close-bg-drop-down-block': {
    opacity: 0,
    zIndex: 0,
    animation: 'closeBG 0.2s ease-out',
    '@keyframes closeBG': {
      from: {
        zIndex: 20,
        opacity: 1
      },
      to: {
        zIndex: 0,
        opacity: 0
      }
    }
  }
})

export default DropdownBlock
