import React, { Component } from 'react'
import { cx } from 'react-emotion'
import { AppBar, DropdownBlock } from '../../atoms'

class AppBarWithContent extends Component {
  state = {
    open: false
  }

  onButtonClick = key => {
    switch (key) {
      case 'logo':
      case 'whatWeDo':
      case 'search':
      case 'entrepreneurs':
      case 'campaign':
      case 'logIn':
      case 'signUp':
        return console.log('key :', key)
      case 'explore': {
        return this.setState(
          ({ open }) => ({ open: !open }),
          () => this.props.appBarOpen(this.state.open)
        )
      }
      default:
        break
    }
  }
  render() {
    const { open } = this.state
    return (
      <div className={cx('AppBarWithContent')}>
        <div>
          <AppBar onButtonClick={this.onButtonClick} clicked={open} />
          <DropdownBlock clicked={open} />
        </div>
      </div>
    )
  }
}

export default AppBarWithContent
