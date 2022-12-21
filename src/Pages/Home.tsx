import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <main className='max-h-screen overflow-hidden'>
      <nav style={{height:"7.5vh"}}>
        <Navbar />
      </nav>
      <section className='flex' style={{height:"92.5vh"}}>
          <Sidebar />
      </section>
    </main>
  )
}

export default Home