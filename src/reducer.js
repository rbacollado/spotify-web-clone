export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // remove after
  token:
    "BQD6arO4JEV9Eu_sSj3FJgWog2fcyUqAgKnbh1YgKPIlaM4qwlL-hPSJneCyYQCxj6ci3hcTVCfUbYr4Nnj_GDml2CrqmpD86swbKqP8OxXRWZSJQci9hr77Mxx0X2Ka-44H42fkBRUjTU3BMPxBKHOna06o9s3FcUToNVf5KQ",
};

const reducer = (state, action) => {
  console.log("action: ", action);

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
