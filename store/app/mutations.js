export default {
  setDrawer(state, drawer) {
    state.drawer = drawer;
  },
  setImage(state, image) {
    state.image = image;
  },
  setColor(state, color) {
    state.color = color;
  },
  toggleDrawer(state, toggle) {
    state.drawer = !toggle;
  }
}
