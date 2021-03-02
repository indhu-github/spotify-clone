export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-a62e8.web.app";
const clientId = "a5fb4e050fa0479abe12641b09f01e19";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "streaming",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
];

//To get the access token from the url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
