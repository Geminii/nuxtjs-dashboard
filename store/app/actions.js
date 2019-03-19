export default {
  setDrawer({commit}, drawer) {
    commit('SET_DRAWER', drawer)
  },
  setImage({commit}, image) {
    commit('SET_IMAGE', image)
  },
  setColor({commit}, color) {
    commit('SET_COLOR', color);
  }
}
