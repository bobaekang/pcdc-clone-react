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

function App() {
  return (
    <Router>
      <div>
        <Header links={links} />

        <main>
          <Switch>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/sponsors">
              <Sponsors />
            </Route>
            <Route path="/press">
              <Press />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
