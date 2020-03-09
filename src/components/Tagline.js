import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  taglineBg: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  taglineContainer: {
    background: 'rgba(23, 23, 30, 0.6)',
    color: '#fff',
    height: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      textAlign: 'center',
      fontSize: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '532px',
      '& h1': {
        fontSize: '76px',
      },
    },
    [theme.breakpoints.up('md')]: {
      height: '456px',
    },
  },
})

function Tagline({ classes, context: { background = 'grey', text } }) {
  return (
    <div
      className={classes.taglineBg}
      style={{
        backgroundImage: background,
      }}
    >
      <div className={classes.taglineContainer}>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default withStyles(styles)(Tagline)
