import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Spinner from '../Components/Spinner'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHommePageVideos } from '../store/reducers/getHomePageVideos'
import { HomePageVideos } from '../Types'

const Home = () => {
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state)=>state.youtubeApp.videos)

  useEffect(()=>{
    dispatch(getHommePageVideos(false))
    console.log(videos)
  }, [dispatch])

  return (
    <main className='home-main'>
      <nav className="nav-bar">
        <Navbar />
      </nav>
      <section>
      <section className='side-bar'>
          <Sidebar />
          {videos.length ? (<InfiniteScroll dataLength={videos.length} next={()=>dispatch(getHommePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <section className='videos'>
                {videos.map((item:HomePageVideos)=>{
                  return <Card data={item} key={item.videoId}/>
                })}
            </section>
          </InfiniteScroll> ):(<Spinner />)}
      </section>
      </section>
    </main>
  )
}

export default Home