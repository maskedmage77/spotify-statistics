import { useEffect, useState } from "react";
import fetchTopTracks from "../spotify-api/fetchTopTracks";

export default function useRecentTracksData(token: string) {

  const [recentTracksData, setRecentTracksData] = useState({
    shortTerm: [],
    mediumTerm: [],
    longTerm: [],
    fetched: false
  });

  useEffect(() => {
    if (token && recentTracksData.fetched === false) {

      let shortTermTracks: any = [];
      let mediumTermTracks: any = [];
      let longTermTracks: any = [];

      const fetchTracks = async () => {

        await fetchTopTracks(token, 'short_term').then((data: any) => {
          shortTermTracks = data;
          console.log('its fetching')
        })
  
        await fetchTopTracks(token, 'medium_term').then((data: any) => {
          mediumTermTracks = data;
        })
  
        await fetchTopTracks(token, 'long_term').then((data: any) => {
          longTermTracks = data;
        })

        setRecentTracksData({
          shortTerm: shortTermTracks,
          mediumTerm: mediumTermTracks,
          longTerm: longTermTracks,
          fetched: true
        })

      }

      fetchTracks()

    }
  }, [token]);

  return [recentTracksData.shortTerm, recentTracksData.mediumTerm, recentTracksData.longTerm];
  
}