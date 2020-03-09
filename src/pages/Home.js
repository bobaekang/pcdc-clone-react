import React from 'react'
import {
  Divider,
  Grid,
  TextField,
  FormControl,
  Button,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const cardItems = [
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/puzzle-pieces-1-1024x683.jpg',
    text: 'Donate',
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/doctor-at-computer-1-1024x683.jpg',
    text: 'Research',
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/world-map-connections-1024x683.jpg',
    text: 'Pediatric Cancer Data Commons',
  },
]

const styles = {
  section: {
    margin: '45px 60px',
    '& h2': {
      textAlign: 'center',
      fontWeight: '300',
      marginBottom: '35px',
    },
    '& .card': {
      color: 'white',
      margin: '0 20px 20px',
      height: '100%',
      minHeight: '200px',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.5s ease',
      '& h2': { fontWeight: '700' },
      '&:hover': {
        transform: 'scale(1.1)',
        cursor: 'pointer',
      },
    },
    '& .input': {
      marginBottom: '1em',
    },
  },
  image: {
    margin: '60px',
    maxWidth: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

function Card(item) {
  return (
    <div className="card" style={{ backgroundImage: `url(${item.image})` }}>
      <h2>{item.text}</h2>
    </div>
  )
}

function Home({ classes }) {
  return (
    <>
      <div className={classes.section}>
        <p>
          <strong>
            The Volchenboum Lab is a diverse team of experts in medicine,
            clinical research, data standards, data infrastructure and
            programming, data governance, and international data sharing
            regulations.
          </strong>
        </p>
        <p>
          With our flagship project the{' '}
          <a href="https://commons.cri.uchicago.edu/pcdc/">
            Pediatric Cancer Data Commons
          </a>{' '}
          (PCDC), we drive research and cures through the connection of
          dispersed data and collaborative data sharing.
        </p>
      </div>
      <Divider />
      <div className={classes.section}>
        <h2>Connect.</h2>
        <p>
          Working together with international leaders in pediatric cancers and
          the <a href="https://www.cancer.gov/">National Cancer Institute,</a>{' '}
          we develop and apply uniform clinical data standards and facilitate
          the collection and linkage of data from many different sources and
          types. Using technology to address inefficiencies in clinical research
          operations and data aggregation and analysis, we make sure that
          patients, physicians, and researchers have the best clinical research
          tools at their disposal. Our management of two pediatric cancer
          disease group consortia,{' '}
          <a href="https://commons.cri.uchicago.edu/inrg/">INRG</a> and{' '}
          <a href="https://commons.cri.uchicago.edu/instruct/">INSTRuCT</a>,
          established the roots of our comprehensive{' '}
          <a href="https://commons.cri.uchicago.edu/pcdc/">
            Pediatric Cancer Data Commons
          </a>{' '}
          Consortium and facilitated the sustainable growth of our international
          network of data contributors and researchers.
        </p>
        <h2>Share.</h2>
        <p>
          By working with legal representatives from partner institutions around
          the world, our team is able to streamline the process of creating
          international data contributor agreements in order to facilitate the
          sharing of data across international borders. We harmonize existing
          clinical research data, make it available to researchers to mine, and
          lead national and international efforts to standardize data collection
          so that we can break down long-standing barriers that have kept
          clinical data siloed and held back advancements in research on rare
          diseases. We educate and train the next generation of students and
          physicians about the role of research informatics in clinical
          research, and we publish literature about our processes so that others
          may learn from our work.
        </p>
        <h2>Cure.</h2>
        <p>
          We utilize our consortium-based approach to drive a wide spectrum of
          clinical research. Our aim is to reimagine the clinical data life
          cycle to create new opportunities to accelerate pediatric cancer
          research and work toward cures.
        </p>
      </div>
      <figure className={classes.image}>
        <img
          width="90%"
          src="https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Team-Photo-e1574784004563.jpg"
          alt=""
          srcSet="https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Team-Photo-e1574784004563.jpg 2674w, https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Team-Photo-e1574784004563-300x177.jpg 300w, https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Team-Photo-e1574784004563-768x454.jpg 768w, https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Team-Photo-e1574784004563-1024x605.jpg 1024w, https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Team-Photo-e1574784004563-680x402.jpg 680w"
        ></img>
      </figure>

      <Divider />
      <div className={classes.section}>
        <h2>Keep with us!</h2>
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <div style={{ margin: '0 30px', border: '2px solid #ccd2dd' }}>
              <p style={{ textAlign: 'center' }}>
                Follow us on Twitter at{' '}
                <a href="http://twitter.com/pedsdatacommons">
                  @PedsDataCommons
                </a>
                .
              </p>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="PedsDataCommons"
                options={{ height: 500 }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ margin: '0 10px' }}>
              <p style={{ textAlign: 'center' }}>
                Sign up below to receive occasional email newsletters from us.
              </p>
              <h3 style={{ fontFamily: 'Source Sans Pro' }}>
                PCDC newsletters
              </h3>
              <FormControl fullWidth style={{ marginBottom: '1em' }}>
                <TextField className="input" required label="Email" fullWidth />
                <TextField className="input" required label="First name" />
                <TextField className="input" required label="Last name" />
                <TextField className="input" label="Institution" />
                <TextField className="input" label="Disease area of interest" />
              </FormControl>
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div className={classes.section}>
        <Grid container justify="center">
          {cardItems.map((item, i) => (
            <Grid item key={i} xs={12} sm={4}>
              {Card(item)}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default withStyles(styles)(Home)
