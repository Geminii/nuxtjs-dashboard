export default function ({ store, redirect }) {
  if (!store.state.user.username) { return redirect('/'); }
}
