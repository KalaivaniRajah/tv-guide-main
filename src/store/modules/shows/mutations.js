export default {
  setShows(state, payload) {
    state.shows = payload;
  },
  setTopComedyShows(state, payload) {
    state.topComedyShows = payload;
  },
  setTopDramaShows(state, payload) {
    state.topDramaShows = payload;
  },
  setTopActionShows(state, payload) {
    state.topActionShows = payload;
  },
};
