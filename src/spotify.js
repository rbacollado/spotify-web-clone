export const authEndpoint = "https://accounts.spotify.com/en/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "49955d1659d449a3a9c4ae235980bb99";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
];

/*https://accounts.spotify.com/en/authorize?response_type=token&client_id=adaaf209fb064dfab873a71817029e0d&redirect_uri=https:%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fweb-playback-sdk%2Fquick-start%2F&scope=streaming%20user-read-email%20user-modify-playback-state%20user-read-private&show_dialog=true */

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  /* get only the access_token from the url */
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      /* item == #access_token=yoursecretkeyhash */
      console.log("current item: ", item);
      let parts = item.split("=");
      console.log(parts);
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
