import React from 'react'
import { Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  pressItem: {
    margin: '5% 12.5%',
    '& h3': {
      fontSize: '24px',
      fontWeight: '700',
      letterSpacing: '1px',
      lineHeight: '1.7',
    },
    '& blockquote': {
      background: '#f9f9f9',
      borderRadius: '30px',
      padding: '30px 40px',
      margin: '20px 10px',
      textAlign: 'center',
      position: 'relative',
      '&::before': {
        content: "'❝'",
        fontSize: '250px',
        position: 'absolute',
        top: '-125px',
        right: '45px',
        opacity: '0.05',
      },
    },
  },
}

const pressItems = [
  {
    title: {
      text:
        'How Rally Kid Ruby is Making an Impact on Childhood Cancer Research (VIDEO)',
      url:
        'https://www.psychologytoday.com/ca/blog/cancer-crossings/201910/cooperation-is-key-component-new-cancer-initiative',
    },
    date: 'October 2, 2019',
    infos: [
      'Project: INSTRuCT',
      'Scroll down to the third video for an interview with Sam Volchenboum.',
    ],
    quote:
      'Ruby’s Dance ‘Til You Drop event provided critical seed money for Dr. Sam Volchenboum’s High Risk High Reward Grant which has gone on to receive funding from the National Institutes of Health (NIH).',
  },
  {
    title: {
      text:
        'University of Chicago to help lead national effort to make cancer research data more useful, accessible and impactful',
      url:
        'https://www.uchicagomedicine.org/forefront/cancer-articles/2019/october/national-effort-to-make-cancer-research-data-more-useful-accessible-and-impactful',
    },
    date: 'October 16, 2019',
    infos: ['Project: Center for Cancer Data Harmonization (CCDH)'],
    quote:
      'The experience and skills of the PCDC team, including expertise in data standards, data harmonization and commons interoperability, made UChicago an important partner for the new CCDH',
  },
  {
    title: {
      text: 'Cooperation Is a Key Component of a New Cancer Initiative',
      url:
        'https://www.psychologytoday.com/ca/blog/cancer-crossings/201910/cooperation-is-key-component-new-cancer-initiative',
    },
    date: 'October 2, 2019',
    infos: ['Project: PedAL'],
    quote:
      '“Everything is incentivized against sharing data right now,” says Dr. Samuel Volchenboum of the University of Chicago. “This new approach makes it imperative to share everything. We’re going to make it easy to do the right thing. … In a few years, if you’re not sharing your data people are going to be asking why.”',
  },
]

function PressItem({ classes, item: { title, date, infos, quote } }) {
  return (
    <div className={classes.pressItem}>
      <h3>
        <a href={title.url}>{title.text}</a>
      </h3>
      <div>
        <span>{date}</span>
        <br />
        {infos.map((info, i) => (
          <div key={i}>
            <span>
              <em>{info}</em>
            </span>
            <br />
          </div>
        ))}
      </div>
      <blockquote>{quote}</blockquote>
    </div>
  )
}

function Press({ classes }) {
  return pressItems.map((item, i) => (
    <div key={i}>
      <PressItem classes={classes} item={item} />
      {i < pressItems.length - 1 && <Divider />}
    </div>
  ))
}

export default withStyles(styles)(Press)
