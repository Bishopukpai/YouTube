import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHommePageVideos } from '../store/reducers/getHomePageVideos'

const Home = () => {
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state)=>state.youtubeApp.videos)

  useEffect(()=>{
    dispatch(getHommePageVideos(false))
  }, [dispatch])

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