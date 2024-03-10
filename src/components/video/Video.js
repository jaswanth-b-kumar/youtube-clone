import React, { useEffect, useState } from 'react';
import './_video.scss';
import request from '../../api';

import { AiFillEye } from 'react-icons/ai'
import moment from 'moment';
import numeral from 'numeral';

const Video = ({ video }) => {
  const { id, snippet: { channelId, channelTitle, title, publishedAt, thumbnails: { medium } } } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  useEffect(() => {
    const get_video_details = async () => {
      const { data: { items } } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: _videoId
        }
      })
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount)
    }
    get_video_details();
  }, [_videoId])
  useEffect(() => {
    const get_channel_icon = async () => {
      const { data: { items } } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        }
      })
      console.log(items)
      setChannelIcon(items[0].snippet.thumbnails.default.url)
    }
    get_channel_icon();
  }, [channelId])
  return (
    <div className="video">
      <div className="video-top">
        <img
          src={medium.url}
          alt=""
        />
        <span>{_duration}</span>
      </div>
      <div title="Dummy Video Title" className="video-title">
        {title}
      </div>
      <div className="video-details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video-channel">
        <img src={channelIcon} alt="Channel icon" />
        {channelTitle}
      </div>
    </div>
  )
}

export default Video