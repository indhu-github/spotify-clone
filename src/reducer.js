export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  discover_weekly: null,
  item: null,
  token: null,
};

//state is the data above and action is the manipulation we do on the data
const reducer = (state, action) => {
  console.log(action);

  //Action has 2 values ->type,[payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
