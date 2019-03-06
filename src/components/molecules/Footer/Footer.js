import React from 'react'
import styled, { cx } from 'react-emotion'
import { Text, Button } from '../../atoms'
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoLogoTwitter, IoIosMailOpen } from 'react-icons/io'

const aboutLists = [
  {
    title: 'EXPLORE',
    list: ['What We Do', 'Funding', 'Marketplace', 'Investing', 'GoFundMe']
  },
  {
    title: 'ABOUT',
    list: [
      'About Us',
      'Blog',
      'Trust & Safety',
      'Help & Support',
      'Press',
      'Careers',
      'Contact'
    ]
  },
  {
    title: 'ENTREPRENEURS',
    list: [
      'How It Works',
      'Indiegogo vs. Kickstarter',
      'Education Center',
      'Experts Directory',
      'Fees',
      'Enterprise',
      'China'
    ]
  }
]

const SignUpEmailBlock = styled(({ className }) => (
  <div className={cx('SignUpEmailBlock', className)}>
    <IoIosMailOpen />
    <Text>Find it first on Indiegogo</Text>
    <Text>Discover new and clever products in the Indiegogo newsletter</Text>
    <input type={'email'} placeholder={'Your email address'} />
    <Button>sign me up</Button>
  </div>
))({
  marginLeft: 'auto',
  marginRight: 12,
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  width: 291,
  marginBottom: 23,
  padding: '0 20px 0 20px',
  display: 'flex',
  svg: {
    fontSize: 50,
    fill: 'rgb(171, 0, 95)'
  },
  div: {
    ':nth-child(2)': {
      lineHeight: '1.5em',
      fontWeight: 'bold',
      paddingBottom: 4
    },
    ':nth-child(3)': {
      fontSize: '.875rem',
      fontWeight: 400,
      paddingBottom: 40
    },
    button: {
      width: 291
    }
  },
  input: {
    width: 273,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: 2,
    height: 40,
    paddingLeft: 15,
    transition: 'all .15s ease',
    fontSize: 16,
    marginBottom: 10,
    ':focus': {
      borderColor: '#949494',
      outline: 'none'
    }
  }
})

const Footer = styled(({ className }) => (
  <div className={cx('Footer', className)}>
    <div className={'container'}>
      <div className={'footer-about-web'}>
        {aboutLists.map(({ title, list }) => (
          <div className={'list-title'}>
            <Text>{title}</Text>
            {list.map(item => (
              <Text>{item}</Text>
            ))}
          </div>
        ))}
        <SignUpEmailBlock />
      </div>
      <div className={'footer-button-currency'}>
        <button>Select Currency</button>
      </div>
      <div className={'footer-trust-policy'}>
        <div>
          <img
            src={'https://www.indiegogo.com/images/bbbImage.png'}
            width={100}
            height={32}
            alt="pso"
          />
        </div>
        <div>
          <FaFacebookF />
          <IoLogoTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div>
          <Text>Terms of Use</Text>
          <Text>Privacy Policy</Text>
          <Text>Cookie Policy</Text>
          <Text>© 2018 Indiegogo, Inc. All Rights Reserved</Text>
        </div>
      </div>
    </div>
  </div>
))({
  backgroundColor: '#f5f5f5',
  padding: '80px 10px 0',
  '.container': {
    margin: '0 auto',
    paddingLeft: 'inherit',
    paddingRight: 'inherit'
  },
  '.footer-about-web': {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto 30%',
    '.list-title': {
      '> div': {
        ':first-child': {
          color: '#6a6a6a',
          marginBottom: 10,
          fontSize: 16,
          ':hover': {
            textDecoration: 'none'
          }
        },
        fontSize: '.875rem',
        color: '#2a2a2a',
        fontFamily: `Benton Sans,Helvetica,"Sans-serif"`,
        letterSpacing: 0,
        lineHeight: '1.9em',
        ':hover': {
          textDecoration: 'underline'
        }
      }
    }
  },
  '.footer-button-currency': {
    paddingBottom: '0.75rem',
    button: {
      fontSize: '.875rem',
      width: 210,
      border: '1px solid #c8c8c8',
      fontWeight: 400,
      letterSpacing: 0,
      textTransform: 'capitalize',
      borderRadius: 2,
      cursor: 'pointer',
      minHeight: 40,
      padding: '0 18px',
      transition: 'all .15s ease',
      whiteSpace: 'nowrap'
    }
  },
  '.footer-trust-policy': {
    borderTop: '2px solid #ddd',
    padding: '10px 0 40px',
    display: 'flex',
    position: 'relative',
    '> div': {
      padding: '0.75rem',
      ':nth-child(1)': {
        display: 'block',
        paddingLeft: 0,
        flex: 'none',
        width: '16.66667%',
        ':hover': {
          cursor: 'pointer'
        }
      },
      ':nth-child(2)': {
        width: 327,
        display: 'flex',
        textAlign: 'center',
        margin: '-0.75rem',
        svg: {
          ':hover': {
            cursor: 'pointer'
          },
          display: 'block',
          flexBasis: 0,
          flexGrow: 1,
          flexShrink: 1,
          padding: '0.75rem'
        }
      },
      ':nth-child(3)': {
        display: 'flex',
        right: 0,
        position: 'absolute',
        margin: '-0.75rem',
        div: {
          minWidth: 101,
          padding: '0.75rem',
          whiteSpace: 'nowrap',
          fontSize: '.75rem',
          lineHeight: '1.5em',
          ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
          },
          ':last-child': {
            paddingRight: 0,
            ':hover': {
              cursor: 'default',
              textDecoration: 'none'
            }
          }
        }
      }
    }
  }
})

export default Footer
