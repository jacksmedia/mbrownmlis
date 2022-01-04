import * as React from 'react'
import Navbar from './Navbar/Navbar'
import Footblur from './Footblur'

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="mains">{children}</section>
      <footer>
        <Footblur />
      </footer>
    </div>
  )
}

export default Layout
