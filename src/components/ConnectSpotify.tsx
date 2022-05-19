/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPES } from '../constants/spotifyAPI'


export default function ConnectSpotify() {
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '2rem',
      padding: '0rem 1rem',
      textAlign: 'center',
    }}>

      <h1 css={{
        fontSize: '4rem',
        fontFamily: 'Bokor',
      }}>
        Spotify Statistics Display
      </h1>

      <p css={{
        maxWidth: '50rem',
        lineHeight: '1.5rem',
      }}>
        Welcome to the Spotify Statistics Display. This page will provide an in-depth breakdown of your listening habits on spotify using the publicly available Spotify API.
      </p>

      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>
        <div css={{
          backgroundColor: 'var(--alternativeBackground)',
          // color: 'var(--background)',
          fontWeight: 'bold',
          padding: '1rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}>
          Connect Spotify
        </div>
      </a>

      <p css={{
        maxWidth: '50rem',
        lineHeight: '1.5rem',
      }}>
       Created by Jacob Hines
      </p>


    </div>
  )
}
