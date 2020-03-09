import React from 'react'
import { Grid, TextField, FormControl, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: '30px',
  },
  section: {
    padding: '0 30px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  form: {
    padding: '1em 30px',
    '& .input': {
      marginBottom: '1em',
    },
  },
})

function Contact({ classes }) {
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} md={6} className={classes.section}>
          <p>
            <strong>Thanks for getting in touch!</strong> If you’re looking to
            contact a specific team member, you can email us individually via
            the <a href="https://commons.cri.uchicago.edu/team/">Team</a> page.
            Otherwise, please use this contact form, and we’ll get back to you
            soon.
          </p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.form}>
          <FormControl fullWidth>
            <strong>Your Name (required)</strong>
            <TextField className="input" variant="outlined" />
            <strong>Your Email (required)</strong>
            <TextField className="input" variant="outlined" />
            <strong>Subject</strong>
            <TextField className="input" variant="outlined" />
            <strong>Your Message</strong>
            <TextField
              className="input"
              variant="outlined"
              multiline
              rows="4"
            />
          </FormControl>
          <Button variant="contained">Send</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Contact)
