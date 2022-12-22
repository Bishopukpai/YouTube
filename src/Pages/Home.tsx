import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Spinner from '../Components/Spinner'
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
          {/* {videos.length ? (<InfiniteScroll></InfiniteScroll> ):(<Spinner />)} */}
          <Spinner />
      </section>
    </main>
  )
}

export default Home