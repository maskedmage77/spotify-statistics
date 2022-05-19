/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function TrackList({ tracks }: { tracks: Array<any> }) {
  return (
    <div css={{
      gap: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    }}>
    { 
      tracks.map((track: any, index) => {

        return (
          <div key={index.toString()} css={{
            display: 'flex',
            flexDirection: 'row',
            background: 'var(--alternativeBackground)',
            color: 'var(--secondary)',
            borderRadius: '0.5rem',
            maxWidth: '400px',
            width: '100%',
            alignItems: 'center',
            textAlign: 'left',
          }}> 

            <img src={track.album.images[2].url} css={{ height: '3rem', borderRadius: '0.5rem', margin: '0.5rem' }}/>
            
            <div>
              <p css={{ color: 'white'}}>{track.name}</p>
              <p>{track.artists[0].name}</p>
            </div>
            

          </div>
        );
      })
    }
    </div>
  )
}
