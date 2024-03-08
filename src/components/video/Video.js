import React, { useEffect } from 'react';
import './_video.scss';
import request from '../../api';

import { AiFillEye } from 'react-icons/ai'

const Video = ({ video }) => {
  const { id, snippet : {channelID,channelTitle,title,publishedAt,thumbnails : {medium}}} = video
  useEffect(() => {
    const get_video_details = async() => {
      const {data:{items}} = await request('/videos',{
        params: {
          part: 'contentDetails,statistics',
          id: id
        }
      })
      console.log(items)
    }
    get_video_details();
  },[id])
  return (
    <div className="video">
      <div className="video-top">
        <img
          src={medium.url}
          alt=""
        />
        <span></span>
      </div>
      <div title="Dummy Video Title" className="video-title">
        Dummy Video Title
      </div>
      <div className="video-details">
        <span>
          <AiFillEye /> 1m views •
        </span>
        <span> 4 days ago</span>
      </div>
      <div className="video-channel">
        Dummy channel name
      </div>
    </div>
  )
}

export default Video