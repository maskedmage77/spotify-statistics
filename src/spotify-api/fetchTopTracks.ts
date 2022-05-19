import axios from "axios";

export default async function fetchTopTracks (token: string, range: 'short_term' | 'medium_term' | 'long_term') {
  
  let call = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=' + range, {
    headers: { Authorization: 'Bearer ' + token }
  });
  return call.data.items;
}