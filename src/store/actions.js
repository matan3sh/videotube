import videoService from '../services/videoService';

export function setVideos() {
  return (dispatch) => {
    videoService
      .query()
      .then((videos) => dispatch({ type: 'SET_VIDEOS', payload: videos }));
  };
}

export function setVideo(video) {
  return { type: 'SET_VIDEO', payload: video };
}

export function setOffset(sec) {
  return { type: 'SET_OFFSET', payload: sec };
}

export function searchVideo(txt) {
  return { type: 'SEARCH_VIDEO', payload: txt };
}
