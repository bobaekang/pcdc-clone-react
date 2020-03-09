import React from 'react'
import { Divider, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  section: {
    margin: '45px 60px',
    '& h3': {
      fontSize: '24px',
      fontWeight: '700',
    },
    '& p': {
      marginBottom: '35px',
    },
  },
  timeline: {
    backgroundColor: '#eaeaea',
    textAlign: 'center',
    padding: '10px',
  },
}

function History({ classes }) {
  return (
    <>
      <div className={classes.section}>
        <p>
          Volchenboum Lab is housed within the{' '}
          <a href="https://pediatrics.uchicago.edu/">
            University of Chicago Department of Pediatrics
          </a>
          , where our director Dr. Sam Volchenboum is a pediatric oncologist and
          researcher. Our flagship project, the{' '}
          <a href="https://commons.cri.uchicago.edu/pcdc/">
            Pediatric Cancer Data Commons (PCDC)
          </a>
          , began as an initiative of the University of Chicago{' '}
          <a href="http://cri.uchicago.edu">Center for Research Informatics</a>,
          which was directed by Dr. Volchenboum from 2013 through early 2019.
          The CRI has unique deep expertise in data harmonization,
          standardization, and governance, as well as experience building
          innovative web-based technical tools to search, access, and share data
          between institutions. Our lab continues to collaborate closely with
          experts in the CRI, and PCDC data is stored on their secure,
          HIPAA-compliant, high-performance data infrastructure.
        </p>
        <h3>Building the PCDC</h3>
        <p>
          The origins of the PCDC lie in the{' '}
          <a href="https://commons.cri.uchicago.edu/inrg/">INRG Data Commons</a>
          , now the largest collection of neuroblastoma patient clinical data in
          the world. In collaboration with the INRG Consortium, the CRI launched
          the public INRG Data Commons and cohort discovery tool in 2013,
          leveraging consortium-building, regulatory, and data harmonization
          work that has been ongoing since 2004. The success of this project,
          which has resulted in more than 25 high-impact publications, led Dr.
          Volchenboum to explore expanding these methods across new disease
          areas.
        </p>
        <p>
          The INRG Consortium and Data Commons, as well as other tracking and
          analysis platforms developed by the CRI, paved the way for rapid
          development of additional data commons.{' '}
          <a href="https://commons.cri.uchicago.edu/instruct/">INSTRuCT</a>, the
          second major initiative to become part of the PCDC, is an
          international consortium and data commons for clinical data related to
          soft-tissue sarcomas. Work on INSTRuCT began in 2017 and the data
          commons and cohort discovery tool launched in 2018.
        </p>
        <p>
          While growing the INRG and establishing INSTRuCT, we also began to
          partner with existing research groups to apply the PCDC methodology to
          additional forms of pediatric cancer. In 2018, we began to work with
          acute myeloid leukemia data by establishing a partnership with the{' '}
          <a href="http://lls.org">Leukemia and Lymphoma Society</a> to develop
          the infrastructure for the{' '}
          <a href="https://commons.cri.uchicago.edu/pedal/">
            Pediatric Acute Leukemia (PedAL) Initiative
          </a>
          . In 2019, we partnered with the{' '}
          <a href="https://commons.cri.uchicago.edu/magic/">MaGIC</a> consortium
          to update and enhance a data dictionary for germ cell tumors and
          transfer their consortium data to the PCDC, and we began similar data
          dictionary work with other groups addressing acute lymphocytic
          leukemia, Ewing sarcoma, osteosarcoma, and Hodgkin’s lymphoma.
        </p>
        <p>
          In autumn 2019, thanks to funding from St. Baldrick’s Foundation, we
          began bringing together all of this related work to form the{' '}
          <strong>Pediatric Cancer Data Commons Consortium</strong>. The PCDC
          Consortium is now developing a common core data dictionary and common
          governance structure spanning seven pediatric cancers: neuroblastoma,
          soft tissue sarcoma, acute myeloid leukemia, acute lymphoblastic
          leukemia, germ cell tumors, bone tumors, and Hodgkin lymphoma. This
          work will enable innovative cross-disease research as well as set a
          standard for future cancer data commons endeavors.
        </p>
        <h3>Cancer Data and Research Ecosystem Projects</h3>
        <p>
          Alongside our core work of building and growing the PCDC, Volchenboum
          Lab takes pride in leveraging our expertise in data standards and
          infrastructure as part of nationwide efforts to make cancer data more
          accessible and impactful. In 2018, we partnered with the NIH-funded{' '}
          <a href="https://commonfund.nih.gov/kidsfirst">
            Gabriella Miller Kids First Pediatric Research Program
          </a>{' '}
          to build the infrastructure for their large-scale pediatric cancer and
          structural birth defect data resource. In 2019, we received NIH
          funding to help lead the development of the{' '}
          <a href="https://commons.cri.uchicago.edu/ccdh/">
            Center for Cancer Data Harmonization
          </a>{' '}
          alongside Oregon State University, Oregon Health &amp; Science
          University, Johns Hopkins University and the University of North
          Carolina.
        </p>
      </div>
      <Divider />
      <div className={classes.section}>
        <Grid container justify="center">
          <Grid xs={9} item className={classes.timeline}>
            <h2>2004</h2>
            <p>INRG Task Force formed</p>
            <h2>2013</h2>
            <p>INRG database and cohort discovery tool launch</p>
            <h2>2017</h2>
            <p>
              INSTRuCT formed; work begins on database and cohort discovery tool
            </p>
            <h2>2018</h2>
            <p>
              CRI/Volchenboum Lab begin work on Gabriella Miller Kids First
              Pediatric Research Program
            </p>
            <p>
              Volchenboum Lab pilots integration of radiology images into the
              INRG Data Commons with funding from NIH
            </p>
            <p>
              Work begins on in-browser data visualizations for INRG Data
              Commons
            </p>
            <p>
              With funding from Rally Foundation, INSTRuCT database and cohort
              discovery tool are completed for internal launch to INSTRuCT
              Executive Committee
            </p>
            <p>
              Leukemia and Lymphoma Society Pediatric Acute Leukemia (PedAL)
              Initiative data infrastructure collaboration begins
            </p>
            <h2>2019</h2>
            <p>
              Partnership established with the MaGIC consortium include germ
              cell tumors in the PCDC
            </p>
            <p>
              AML data dictionary and data commons work expands to include
              European partners
            </p>
            <p>
              Volchenboum Lab receives funding from St. Baldrick’s Foundation to
              create the Pediatric Cancer Data Commons Consortium
            </p>
            <p>
              First PCDC All-Commons Workshop is held at the SIOP Conference in
              Lyon
            </p>
            <p>
              Data dictionary work begins for ALL, Ewing sarcoma, osteosarcoma,
              and Hodgkin’s lymphoma
            </p>
            <p>
              Volchenboum Lab receives NIH funding to create the Center for
              Cancer Data Harmonization with partner institutions
            </p>
            <p>AML data dictionary complete</p>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default withStyles(styles)(History)
