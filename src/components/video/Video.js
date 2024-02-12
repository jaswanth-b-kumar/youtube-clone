import React from 'react';
import './_video.scss';

import { AiFillEye } from 'react-icons/ai'

function Video() {
  return (
    <div className="video">
      <div className="video-top">
        <img
          src="https://i.ytimg.com/vi/uJMCNJP2ipI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfSybvWkY5c3KqSqZ0SZBksn38qw"
          alt=""
        />
        <span>05:43</span>
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