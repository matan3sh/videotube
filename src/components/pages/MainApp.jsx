import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setVideos, setVideo } from "../../store/actions";
import { Loader } from "../Layout/Loader";

import VideoList from "../Video/VideoList";
import Search from "../Video/Search";
import Player from "../Video/Player";

const MainApp = ({ videos, filtered, video, setVideo, setVideos }) => {
  useEffect(() => {
    setTimeout(() => {
      setVideos();
    }, 1000);
  });

  const onSetVideo = (video) => setVideo(video);

  return (
    <>
      {videos ? (
        <div className="grid-2 my-2">
          <div>
            <Search />
            {filtered ? (
              <VideoList videos={filtered} onSetVideo={onSetVideo} />
            ) : (
              <VideoList videos={videos} onSetVideo={onSetVideo} />
            )}
          </div>
          <div>{video && <Player />}</div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

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
