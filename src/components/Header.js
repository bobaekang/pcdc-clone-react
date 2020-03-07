import React from 'react'
import Navbar from './Navbar'

function Header({ links }) {
  return (
    <header>
      <Navbar links={links} />
    </header>
  )
}

export default Header
