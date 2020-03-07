import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/about/Contact'
import Careers from './pages/about/Careers'
import History from './pages/about/History'
import Press from './pages/about/Press'
import Sponsors from './pages/about/Sponsors'
import Team from './pages/about/Team'

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team">Meet the team</Link>
              </li>
              <li>
                <Link to="/history">Our history</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        </header>

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

        <footer>Footer</footer>
      </div>
    </Router>
  )
}

export default App
