import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVideos, setVideo } from '../../store/actions';
import { Loader } from '../Layout/Loader';

import VideoList from '../Video/VideoList';
import Search from '../Video/Search';
import Player from '../Video/Player';

class MainApp extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setVideos();
    }, 1000);
  }

  onSetVideo = (video) => {
    this.props.setVideo(video);
  };

  render() {
    const { videos, filtered, video } = this.props;
    return (
      <>
        {' '}
        {videos ? (
          <div className='grid-2 my-2'>
            <div>
              <Search />
              {filtered ? (
                <VideoList videos={filtered} onSetVideo={this.onSetVideo} />
              ) : (
                <VideoList videos={videos} onSetVideo={this.onSetVideo} />
              )}
            </div>
            <div>{video && <Player />}</div>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  videos: state.videoApp.videos,
  video: state.videoApp.video,
  filtered: state.videoApp.filtered,
});

const mapDispatchToProps = {
  setVideos,
  setVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
