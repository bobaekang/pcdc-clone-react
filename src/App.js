import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/about/Contact'
import Careers from './pages/about/Careers'
import History from './pages/about/History'
import Press from './pages/about/Press'
import Sponsors from './pages/about/Sponsors'
import Team from './pages/about/Team'
import Header from './components/Header'
import Footer from './components/Footer'
import MainLayout from './components/MainLayout'

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/team',
    name: 'Meet the team',
  },
  {
    path: '/history',
    name: 'Our history',
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
  },
  {
    path: '/press',
    name: 'Press',
  },
  {
    path: '/careers',
    name: 'Careers',
  },
  {
    path: '/contact',
    name: 'Contact us',
  },
]

const pages = [
  {
    component: <Team />,
    path: '/team',
    tagline: {
      background: 'grey',
      text: 'Team',
    },
  },
  {
    component: <History />,
    path: '/history',
    tagline: {
      background: 'grey',
      text: 'History',
    },
  },
  {
    component: <Sponsors />,
    path: '/sponsors',
    tagline: {
      background: 'grey',
      text: 'Sponsors',
    },
  },
  {
    component: <Press />,
    path: '/press',
    tagline: {
      background: 'grey',
      text: 'Press',
    },
  },
  {
    component: <Careers />,
    path: '/careers',
    tagline: {
      background: 'grey',
      text: 'Careers',
    },
  },
  {
    component: <Contact />,
    path: '/contact',
    tagline: {
      background: 'grey',
      text: 'Contact',
    },
  },
  {
    component: <Home />,
    path: '/',
    tagline: {
      background: `url("https://commons.cri.uchicago.edu/wp-content/uploads/2019/05/global-connections-1.jpg")`,
      text: 'Connect. Share. Cure.',
    },
  },
]

function App() {
  return (
    <Router>
      <Header links={links} />

      <Switch>
        {pages.map(({ component, path, tagline }, i) => (
          <Route key={i} path={path}>
            <MainLayout tagline={tagline}>{component}</MainLayout>
          </Route>
        ))}
      </Switch>

      <Footer />
    </Router>
  )
}

export default App
