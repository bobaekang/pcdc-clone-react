import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const jobs = [
  {
    title: 'Full Stack Developer',
    description:
      'We are hiring two Full Stack Developers to join our growing team of seasoned developers in building, testing, and deploying software to support the Pediatric Cancer Data Commons and related work.',
    qualification:
      'a college or university degree in a related field and 5-7 years of related work experience. Preferred qualifications include experience with Python, SQL, React, and other specific technology competencies that are listed in the job description.',
    code: 'JR08056',
    link:
      'https://uchicago.wd5.myworkdayjobs.com/en-US/External/job/Shoreland/Full-Stack-Developer-1_JR08056',
  },
  {
    title: 'Front End Web Developer',
    description:
      'The Front End Web Developer will be responsible for creating the application user interface for the PCDC, to achieve an accessible and intuitive experience for cancer researchers across the globe.',
    qualification:
      'a college or university degree, a minimum of 3 years development experience with both front-end and server-side web development, a background in writing interactive user interfaces with a particular focus on data-intensive applications, and specific technology competencies that are listed in the full job description.',
    code: 'JR06588',
    link:
      'https://uchicago.wd5.myworkdayjobs.com/en-US/External/job/Shoreland/Front-End-Web-Developer_JR06588',
  },
  {
    title: 'Technical Project Manager',
    description:
      'The Technical Project Manager will be responsible for supporting the development and implementation of software and data infrastructure project plans, including applications, websites, and visualization tools and platforms. They will work directly with stakeholders to gather specifications, create project documentation and backlogs, and regularly report project deliverables.',
    qualification:
      'a college or university degree, 5-7 years in a related job discipline, experience successfully applying Agile methodology to complex software projects, and additional experience and competencies that are listed in the full job description.',
    code: 'JR07278',
    link:
      'https://uchicago.wd5.myworkdayjobs.com/en-US/External/job/Shoreland/Technical-Project-Manager_JR07278',
  },
  {
    title: 'Clinical Data Standards Analyst',
    description:
      'The Clinical Data Standards Analyst will be responsible for collaborating with consortium groups and other stakeholders to develop and implement data standards for pediatric cancer types. They will also participate in grant work to develop standard terminologies and data models to connect cancer data and create a robust cancer data ecosystem across genomics, proteomics, canine cancer, and imaging data.',
    qualification:
      'a college or university degree, work experience in a related field, and relevant subject matter knowledge.',
    code: 'JR07414',
    link:
      'https://uchicago.wd5.myworkdayjobs.com/en-US/External/job/Shoreland/Clinical-Data-Standards-Analyst_JR07414',
  },
]

const styles = theme => ({
  section: {
    margin: '45px 60px',
    '& h2': {
      fontSize: '35px',
      textAlign: 'center',
    },
  },
  jobPost: {
    border: 'solid #1c3463',
    padding: '0 5%',
    margin: '2% 0',
    textAlign: 'center',
    '& h3': {
      fontSize: '24px',
      textAlign: 'center',
    },
    '& .button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
})

function JobPost(classes, job) {
  return (
    <div key={job.code} className={classes.jobPost}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>
        <strong>We're looking for someone with </strong>
        {job.qualification}
      </p>
      <p>Requisition #{job.code}</p>
      <div className="button">
        <Button variant="contained" size="large" href={job.link}>
          Apply Now
        </Button>
      </div>
    </div>
  )
}

function Careers({ classes }) {
  return (
    <>
      <div className={classes.section}>
        <h2>We’re Hiring</h2>
        <p>
          Join our team and help build the{' '}
          <a href="https://commons.cri.uchicago.edu/pcdc">
            Pediatric Cancer Data Commons
          </a>
          , a single platform of harmonized clinical data that will serve as a
          global resource for medical investigators. From clinical research to
          project management to programming, your expertise can contribute to
          transforming childhood cancer research and working toward cures.
        </p>
        <p>
          Current job openings are listed below. To see the full job posting and
          apply, click “apply now” or visit{' '}
          <a href="https://uchicago.wd5.myworkdayjobs.com/External">
            UChicago Jobs
          </a>{' '}
          and search by requisition number. Learn more about working at the
          University of Chicago{' '}
          <a href="http://humanresources.uchicago.edu/jobs/">here</a>.
        </p>
      </div>
      {jobs.map(job => JobPost(classes, job))}
    </>
  )
}

export default withStyles(styles)(Careers)
