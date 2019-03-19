export default {
  async setUsername({commit}, user) {
    commit('SET_USERNAME', user);
  },
}
