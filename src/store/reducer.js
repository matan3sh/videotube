const initialState = {
  videos: [],
  video: null,
  offSet: 0,
  filtered: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VIDEOS':
      return {
        ...state,
        videos: action.payload,
      };
    case 'SET_VIDEO':
      return {
        ...state,
        video: action.payload,
        offSet: 0,
      };
    case 'SET_OFFSET':
      return {
        ...state,
        offSet: action.payload,
      };
    case 'SEARCH_VIDEO':
      return {
        ...state,
        filtered: state.videos.filter((video) =>
          video.title.toUpperCase().includes(action.payload.toUpperCase())
        ),
      };
    default:
      return state;
  }
}
