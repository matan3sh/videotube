import axios from 'axios';
import storageService from './storageService';

const URL = 'https://glacial-escarpment-40412.herokuapp.com/songs';
const KEY = 'quotes';
var gVideos = [];

export default {
  query,
};

function query() {
  var videos = storageService.load(KEY, gVideos);
  if (videos.length > 0) {
    gVideos = videos;
    return Promise.resolve(videos);
  } else {
    return axios
      .get(URL)
      .then((res) => res.data)
      .then((videos) => {
        gVideos = videos;
        storageService.store(KEY, gVideos);
        return videos;
      });
  }
}
