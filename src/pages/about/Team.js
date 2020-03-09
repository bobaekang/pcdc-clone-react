import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const members = [
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Sam-Volchenboum-1-e1574785062697.jpg',
    name: 'Sam Volchenboum, MD, PhD',
    title: 'Principal Investigator & Pediatric Oncologist',
    description: 'The mastermind behind it all.',
    social: {
      linkedin: 'https://www.linkedin.com/in/samvolchenboum/',
      researchgate: 'https://www.researchgate.net/profile/Samuel_Volchenboum',
      twitter: 'https://twitter.com/samvolchenboum',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Brian-Furner-1-e1574785031431.jpg',
    name: 'Brian Furner, MS',
    title: 'Director of Applications Development',
    description: 'Providing the platforms that turn data into discovery.',
    social: {
      email: 'bfurner@bsd.uchicago.edu',
      linkedin: 'https://www.linkedin.com/in/brian-furner-99538524/',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Monica-Palese-e1574785317682.jpg',
    name: 'Monica Palese, MPH',
    title: 'Program Manager',
    description: 'Translating the vision into action.',
    social: {
      email: 'mpalese@bsd.uchicago.edu',
      linkedin: 'https://www.linkedin.com/in/monicapalese',
      researchgate: 'https://www.researchgate.net/profile/Monica_Palese',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Suzi-Birz-e1574784951442.jpg',
    name: 'Suzi Birz, MScMI, FHIMSS',
    title: 'Regulatory and Data Governance Consultant',
    description: 'Making sure we do the right thing.',
    social: {
      email: 'sbirz@bsd.uchicago.edu',
      twitter: 'https://twitter.com/suzibirz?lang=en',
      linkedin: 'https://www.linkedin.com/in/suzibirz',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Luca-Graglia-2-e1574784699528.jpg',
    name: 'Luca Graglia, MS',
    title: 'Senior Programmer',
    description: 'Building the infrastructure that powers the PCDC.',
    social: {
      email: 'lgraglia@bsd.uchicago.edu',
      linkein: 'https://www.linkedin.com/in/lucagraglia/',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Jian-Tian-1-e1574784910326.jpg',
    name: 'Jian Tian',
    title: 'Senior Programmer',
    description: 'Developing software for data sharing and discovery.',
    social: { email: 'jtian1@bsd.uchicago.edu' },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Nicole-Dussault-e1574784818168.jpg',
    name: 'Nicole Dussault',
    title: 'Clinical Data Analyst & 4th-Year Medical Student',
    description: 'Harmonizing data definitions.',
    social: { email: 'nicole.dussault@uchospitals.edu' },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/381A1756-Edit-e1574785238768.jpg',
    name: 'Maura Kush',
    title: 'Clinical Data Analyst',
    description: 'You bring the data, I’ll bring the standards!',
    social: {
      email: 'kushm@peds.bsd.uchicago.edu',
      linkedin: 'https://www.linkedin.com/in/maura-kush-91849b77/',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Anoop-Mayampurath-1-e1574784779966.jpg',
    name: 'Anoop Mayampurath, PhD',
    title: 'Sr. Statistician',
    description: 'Data Whisperer Extraordinaire.',
    social: {
      email: 'amayampurath@peds.bsd.uchicago.edu',
      linkedin: 'https://www.linkedin.com/in/anoop-mayampurath-74859511/',
    },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/Blumhardt-e1574785192696.jpeg',
    name: 'Kathryn Blumhardt',
    title: 'Project Manager',
    description: 'Cat-herder and consortium wrangler.',
    social: { email: 'kblumhardt@peds.bsd.uchicago.edu' },
  },
  {
    image:
      'https://commons.cri.uchicago.edu/wp-content/uploads/2019/11/Caitlin-Pike-e1574785131309.jpg',
    name: 'Caitlin Pike',
    title: 'Communications Manager',
    description: 'Sharing what we do with the world.',
    social: { email: 'cpike@bsd.uchicago.edu' },
  },
]

const styles = theme => ({
  container: {
    background: '#efefef',
    marginBottom: '30px',
    padding: '15% 5% 0%',
  },
  member: {
    margin: '15% 7.5%',
    borderBottom: '5px solid whitesmoke',
    borderTop: '5px solid #85b0dd',
    textAlign: 'center',
    '& .image': {
      border: '6px solid #eeeeee',
      borderRadius: '60px',
      boxShadow: '2px 0px 1px 0px rgba(0,0,0,0.05)',
      marginTop: '-25%',
    },
    '& h4': {
      fontWeight: 400,
      fontSize: '1.1em',
    },
    '& .title': {
      color: '#888',
    },
    '& .description': {
      color: '#555',
      fontSize: '0.9em',
    },
    '& .social': {
      '& img': {
        width: '24px',
        margin: '10px 4px',
      },
    },
  },
})

function Member(classes, member) {
  return (
    <Grid key={member.name} xs={12} sm={6} item>
      <Paper className={classes.member} elevation={0} square>
        <img className="image" src={member.image} alt="" width="50%" />
        <h4>{member.name}</h4>
        <p className="title">{member.title}</p>
        <p className="description">{member.description}</p>
        <div className="social">
          {member.social.email && (
            <a href={`mailto:${member.social.email}`}>
              <img
                alt="Email"
                src="https://commons.cri.uchicago.edu/wp-content/plugins/team-members/inc/img/links/email.png"
              ></img>
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter}>
              <img
                alt="Twitter"
                src="https://commons.cri.uchicago.edu/wp-content/plugins/team-members/inc/img/links/twitter.png"
              ></img>
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin}>
              <img
                alt="LinkedIn"
                src="https://commons.cri.uchicago.edu/wp-content/plugins/team-members/inc/img/links/linkedin.png"
              ></img>
            </a>
          )}
          {member.social.researchgate && (
            <a href={member.social.researchgate}>
              <img
                alt="ResearchGate"
                src="https://commons.cri.uchicago.edu/wp-content/plugins/team-members/inc/img/links/researchgate.png"
              ></img>
            </a>
          )}
        </div>
      </Paper>
    </Grid>
  )
}

function Team({ classes }) {
  return (
    <div>
      <Grid className={classes.container} container justify="center">
        {members.map(member => Member(classes, member))}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Team)
