import React from 'react'
import { Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Tagline from './Tagline'

const styles = {
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}

function MainLayout({ children, classes, tagline }) {
  return (
    <main>
      <Tagline context={tagline} />
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
    </main>
  )
}

export default withStyles(styles)(MainLayout)
