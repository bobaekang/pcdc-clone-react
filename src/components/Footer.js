import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  footer: {
    background: '#f7f7f7',
    color: '#666',
    fontSize: '13px',
    lineHeight: '23px',
    paddingBottom: '60px',
    paddingTop: '80px',
  },
  footerWidgetContainer: {
    margin: '0',
  },
  footerWidget: {
    padding: '30px 0',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 15px',
    },
  },
  links: {
    textTransform: 'uppercase',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      paddingBottom: '10px',
    },
    '& a': {
      color: '#666',
      fontSize: '14px',
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
})

function Footer({ classes }) {
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          className={classes.footerWidgetContainer}
        >
          <Grid item xs={4} md={9} lg={4} className={classes.footerWidget}>
            Volchenboum Lab
            <br />
            University of Chicago
            <br />
            900 East 57th Street
            <br />
            Chicago, IL 60637
          </Grid>
          <Grid item xs={12} lg={4} className={classes.footerWidget}></Grid>
          <Grid item xs={4} md={9} lg={4} className={classes.footerWidget}>
            <ul className={classes.links}>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default withStyles(styles)(Footer)
