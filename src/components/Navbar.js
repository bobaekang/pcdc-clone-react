import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ links }) {
  return (
    <nav>
      <ul>
        {links.map(({ path, name }) => (
          <li>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
