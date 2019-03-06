import styled from 'react-emotion'

export const StyledCenterHorizontal = styled('div')({
  textAlign: 'center',
  '> div': {
    ':last-child': {
      marginBottom: 20
    }
  }
})

export const StyledHomePage = styled('div')({
  '&.lock-scroll': {
    height: '100vh',
    left: 0,
    overflow: 'hidden',
    position: 'fixed',
    right: 0
  },
  '.container': {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 1280
  },
  '.content-which-interest': {
    marginTop: 45,
    marginBottom: 20
  },
  '.button-sign-up-interest': {
    marginBottom: 20,
    button: {
      border: '1px solid #2a2a2a',
      fontSize: 12
    }
  },
  '.claver-think': {
    position: 'relative',
    '.heading-with-label-header': {
      span: {
        fontSize: 34,
        '> span': {
          fontSize: 10,
          top: 0,
          position: 'absolute'
        }
      }
    },
    '.heading-with-label-label': {
      margin: 'auto',
      marginTop: 30,
      width: '67%',
      lineHeight: '1.4rem'
    },
    img: {
      position: 'absolute',
      width: 275,
      height: 187,
      left: 0,
      bottom: 0
    },
    '.claver-think-button-frame': {
      display: 'flex',
      justifyContent: 'center',
      button: {
        width: 152,
        fontWeight: 'bolder',
        fontSize: 15,
        whiteSpace: 'nowrap',
        ':last-child': {
          margin: '50px 0 80px 0',
          marginLeft: 20
        }
      }
    }
  }
})
