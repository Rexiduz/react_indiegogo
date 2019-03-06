import styled from 'react-emotion'

export const StyledFeaturedProjectBlock = styled('div')({
  '.feature-description-block': {
    position: 'absolute',
    bottom: 60,
    '.feature-description-content': {
      height: 129,
      'div:nth-child(1)': {
        display: 'inline-block',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
        borderBottom: '1px solid',
        marginBottom: 12
      },
      'div:nth-child(2)': {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: '28px',
        marginBottom: 5
      },
      'div:nth-child(3)': {
        marginBottom: 6,
        maxWidth: 400
      },
      'div:nth-child(4)': {
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase'
      }
    },
    '.feature-description-navArrow': {
      marginTop: 25,
      display: 'flex',
      alignItems: 'center',
      'div:nth-child(2)': {
        margin: '0 20px 0 20px'
      },
      '.icon': {
        border: '1px solid #ffffff',
        borderRadius: 20,
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        svg: {
          height: 20,
          width: 20
        },
        ':hover': {
          cursor: 'pointer',
          svg: {
            fill: '#2a2a2a'
          },
          background: '#fff'
        }
      }
    }
  },
  div: {
    color: '#fff'
  }
})
