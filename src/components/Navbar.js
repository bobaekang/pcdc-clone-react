import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  IconButton,
  Drawer,
  Hidden,
  Grid,
  List,
  ListItem,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  navbar: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '95%',
    minHeight: '50px',
    padding: '30px 2.5%',
    transition: 'all 0.5s ease',
    textTransform: 'uppercase',
    '& a': {
      fontSize: '13px',
      margin: '0 10px',
    },
  },
}

const logoLight =
  'https://commons.cri.uchicago.edu/wp-content/uploads/2019/07/volchenboum-lab-white.png'
const logoDark =
  'https://commons.cri.uchicago.edu/wp-content/uploads/2019/07/volchenboum-lab-dark-gray.png'

function Navbar({ classes, links }) {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    const onScroll = e => {
      if (window.scrollY === 0) {
        setIsTop(true)
      } else {
        if (isTop) setIsTop(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isTop])

  const [drawer, setDrawer] = useState(false)
  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawer(open)
  }

  const [home, ...about] = links

  return (
    <nav
      className={classes.navbar}
      style={
        isTop
          ? {}
          : {
              padding: '10px 2.5% 0',
              background: 'white',
              borderBottom: '1px solid #eee',
            }
      }
    >
      <Grid container justify="space-between">
        <Grid item>
          <Link to={home.path}>
            <img
              src={isTop ? logoLight : logoDark}
              height="40px"
              alt="Connect. Share. Cure."
            />
          </Link>
        </Grid>
        <Grid item>
          <Hidden smDown>
            {about.map(({ path, name }, i) => (
              <Link
                key={i}
                to={path}
                style={{ color: isTop ? '#fff' : '#333' }}
              >
                {name}
              </Link>
            ))}
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={toggleDrawer(true)}>
              <Menu style={{ color: isTop ? '#fff' : '#333' }} />
            </IconButton>
            <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
              <List>
                {about.map(({ path, name }, i) => (
                  <ListItem key={i}>
                    <Link to={path}>{name}</Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Hidden>
        </Grid>
      </Grid>
    </nav>
  )
}

export default withStyles(styles)(Navbar)
