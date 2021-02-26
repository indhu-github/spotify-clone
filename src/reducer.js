export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
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

    default:
      return state;
  }
};

export default reducer;