import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <main className='home-main'>
      <nav className="nav-bar">
        <Navbar />
      </nav>
      <section className='side-bar'>
          <Sidebar />
      </section>
    </main>
  )
}

export default Home