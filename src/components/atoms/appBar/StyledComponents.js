import styled from 'react-emotion'

export const AppBarStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 60,
  paddingLeft: '1rem',
  paddingRight: '1rem',
  '.right-block': {
    display: 'flex',
    right: 0,
    '> div: last-child': {
      paddingRight: 0
    }
  },
  '.left-block': {
    display: 'flex',
    '> img': {
      paddingLeft: 0
    }
  },
  '.logo': {
    padding: 12,
    width: 160,
    height: 24,
    ':hover': {
      cursor: 'pointer'
    }
  },
  '*:before': {
    boxSizing: 'border-box'
  },
  '.divider': {
    display: 'block',
    padding: '0.75rem',
    height: 32,
    position: 'relative',
    width: 1,
    flex: 'none',
    ':before': {
      borderLeft: '1px solid #ddd',
      content: `''`,
      height: '55%',
      position: 'absolute'
    }
  },
  '.top-bar-block': {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    fontSize: '.875rem',
    letterSpacing: 0,
    lineHeight: '1.5em',
    '> div': {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 800
    },
    '.search-icon': {
      marginLeft: -3
    },
    svg: {
      marginLeft: 5,
      fontSize: 14,
      ':hover': {
        cursor: 'pointer',
        color: '#e51075'
      }
    }
  },
  // NOTE: animation ROTATE arrow
  '.arrow-rotate': {
    '> div': {
      '> svg': {
        transform: 'rotate(179deg)',
        animation: 'spin 0.2s linear',
        '@keyframes spin': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': { transform: 'rotate(179deg)' }
        }
      }
    }
  },
  '.arrow-reverse-rotate': {
    '> div': {
      '> svg': {
        transform: 'rotate(0deg)',
        animation: 'spinS 0.2s linear',
        '@keyframes spinS': {
          '0%': {
            transform: 'rotate(179deg)'
          },
          '100%': { transform: 'rotate(0deg)' }
        }
      }
    }
  }
})

export const StyledExploreContentCardWithLink = styled('div')(
  ({ imageUrl, middle }) => ({
    ':hover': {
      cursor: 'pointer',
      '.explore-content-card-image': {
        '>div >div': {
          ':last-child': {
            color: '#E51075'
          }
        }
      }
    },
    marginTop: 25,
    '> div': {
      ':first-child': {
        fontSize: '.875rem',
        lineHeight: '1.4em',
        marginBottom: 5
      }
    },
    '.explore-content-card-image': {
      backgroundImage: `url("${imageUrl}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 146,
      height: 98,
      marginTop: '.5rem',
      display: 'flex',
      alignItems: 'center',
      '> div': {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 600,
        '> div': {
          ':first-child': {
            fontSize: '.77rem',
            fontWeight: 600,
            letterSpacing: 1.3,
            lineHeight: '2.4em',
            color: middle === 'MARKETPLACE' ? '#eca200' : '#088366'
          },
          ':last-child': {
            textTransform: 'uppercase',
            fontSize: '.6875rem'
          }
        }
      }
    }
  })
)

export const StyledExploreContentBlock = styled('div')({
  backgroundColor: '#fff',
  borderTop: '1px solid #ddd',
  boxShadow:
    '0 2px 6px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.04), 0 1px 2px 0 rgba(0,0,0,.18)',
  //NOTE: animation DROP explore block
  '.open-drop-down-content': {
    maxHeight: 550,
    opacity: 1,
    overflow: 'visible',
    animation: 'open 0.5s linear',
    '@keyframes open': {
      from: {
        maxHeight: 0,
        opacity: 0,
        overflow: 'hidden'
      },
      to: { maxHeight: 550, opacity: 1, overflow: 'visible' }
    }
  },
  '.close-drop-down-content': {
    maxHeight: 0,
    opacity: 0,
    overflow: 'hidden',
    animation: 'close 0.2s linear',
    '@keyframes close': {
      from: {
        overflow: 'visible',
        maxHeight: 550,
        opacity: 1
      },
      to: {
        maxHeight: 0,
        opacity: 0,
        overflow: 'hidden'
      }
    }
  },
  '.explore-content-block': {
    margin: '0 auto',
    maxWidth: 1002,
    padding: '2.5rem',
    '> div': {
      ':first-child': {
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        fontSize: '.875rem',
        fontWeight: 600,
        letterSpacing: 1,
        lineHeight: '1.5em',
        svg: {
          fontSize: 12
        },
        ':hover': {
          textDecoration: 'underline'
        }
      },
      ':last-child': {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto'
      }
    }
  }
})
