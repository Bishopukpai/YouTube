import React from 'react'
import { Link } from 'react-router-dom'
import { HomePageVideos } from '../Types'

const Card = ({data}: {data:HomePageVideos}) => {
   
  return (
    <section className='card-main'>
        <section className='card-contents'>
            <span className='video-duration'>
              {data.videoDuration}
            </span>
              <Link to={`/watch/${data.videoId}`}>
                <img src={data.videoThumbnail} className="video-thumbnail" alt="thumbnail"/>
              </Link>
        </section>
    </section>
  )
}

export default Card