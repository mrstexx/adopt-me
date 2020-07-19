export default function theme(state = "darkblue", action) {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  }
  return state;
}