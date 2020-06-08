import React, { Component } from 'react';
import VideoPreview from './VideoPreview.jsx';

const VideoList = ({ videos, onSetVideo }) => {
  return (
    <React.Fragment>
      {videos.map((video) => (
        <VideoPreview video={video} key={video.id} onSetVideo={onSetVideo} />
      ))}
    </React.Fragment>
  );
};

export default VideoList;
