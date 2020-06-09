import React from 'react';

const VideoPreview = ({ video, onSetVideo }) => {
  return (
    <div className='song-card pointer' onClick={() => onSetVideo(video)}>
      <i className='fas fa-video' /> {video.title}
    </div>
  );
};

export default VideoPreview;
