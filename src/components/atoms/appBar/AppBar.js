import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { Text } from '../../atoms'
import { AppBarStyled } from './StyledComponents'

const AppBar = ({ onButtonClick, clicked }) => (
  <AppBarStyled>
    <div className="left-block" onClick={() => onButtonClick('logo')}>
      <img
        className={'logo'}
        src="https://learn.indiegogo.com/wp-content/uploads/2015/10/igg-logo.png"
        alt="indiegogo"
      />
      <div
        className={`top-bar-block ${
          clicked ? 'arrow-rotate' : 'arrow-reverse-rotate'
        }`}
        onClick={() => onButtonClick('explore')}
      >
        <Text.Link>
          Explore <FaAngleDown />
        </Text.Link>
      </div>
      <div
        className={'top-bar-block'}
        onClick={() => onButtonClick('whatWeDo')}
      >
        <Text.Link>What We Do</Text.Link>
      </div>
      <div className={'top-bar-block'} onClick={() => onButtonClick('search')}>
        <IoIosSearch className={'search-icon'} size={23} />
      </div>
    </div>
    <div className="right-block" onClick={() => onButtonClick('entrepreneurs')}>
      <div className="top-bar-block">
        <Text.Link>For Entrepreneurs</Text.Link>
      </div>
      <div className="top-bar-block" onClick={() => onButtonClick('campaign')}>
        <Text.Link>Start a Campaign</Text.Link>
      </div>
      <div className="divider" />
      <div className="top-bar-block" onClick={() => onButtonClick('logIn')}>
        <Text.Link>Log In</Text.Link>
      </div>
      <div className="top-bar-block" onClick={() => onButtonClick('signUp')}>
        <Text.Link>Sign Up</Text.Link>
      </div>
    </div>
  </AppBarStyled>
)

export default AppBar
