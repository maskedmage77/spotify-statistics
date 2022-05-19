/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function ActionButton() {
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      maxWidth: '400px',
      backgroundColor: 'var(--alternativeBackground)',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '2px solid var(--primary)',
      cursor: 'pointer',
    }}>

      <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="var(--secondary)" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
      </svg>

      <h1 css={{
        fontSize: '1.25rem',
        color: 'var(--secondary)',
        
      }}>
        Tracks
      </h1>
      <p css={{
        color: 'var(--secondary)',
      }}>
        This is a short description of the action
      </p>
    </div>
  )
}
