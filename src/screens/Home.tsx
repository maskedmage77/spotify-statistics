/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Fragment, useEffect, useState } from 'react'
import ActionButton from '../components/ActionButton';
import ConnectSpotify from '../components/ConnectSpotify';

import useRecentTracksData from '../hooks/useRecentTracksData'


export default function Home() {

  const [token, setToken] = useState("");
  
  useEffect(() => {

    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (token === null) {
      token = '';
    }

    if (!token && hash) {
      // @ts-ignore
      token = hash.substring(1).split("&").find(e => e.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

  }, [])

  const [shortTerm, mediumTerm, longTerm] = useRecentTracksData(token);
  
  console.log(shortTerm)
  
  return (
    <Fragment>
    { !token ? <ConnectSpotify/> :

      <div css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '2rem',
        textAlign: 'center',
      }}>


        <h1 css={{
          fontSize: '4rem',
          fontFamily: 'Bokor',
        }}>
          Spotify Statistics Display
        </h1>

        <div css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
          padding: '0rem 1rem',
          maxWidth: '800px'
        }}>
          
          <ActionButton/>
          <ActionButton/>
          <ActionButton/>
          

        </div>

        
        

      </div>

    }
    </Fragment>
  )
}
