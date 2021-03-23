import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      shows: [],
      topComedyShows: [],
      topDramaShows: [],
      topActionShows: [],
    };
  },
  actions,
  getters,
  mutations,
};
