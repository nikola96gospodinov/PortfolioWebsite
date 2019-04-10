import React from 'react'
import FontAwesome from 'react-fontawesome'

const SideCV = () => {
  return (
    <div
        style = {{
            margin: '2rem 0'
        }}
    >
        <h2
            style = {{
                fontSize: '2rem',
                color: '#222',
                marginBottom: '1rem'
            }}
            >Need a copy of my CV?</h2>
        <a 
            href = "https://www.dropbox.com/s/wtj8qhhv9jo0ysf/CV%20-%20Nikola%20Gospodinov.pdf?dl=0"
            style = {{
                fontSize: '1.3rem',
                border: '1px solid #333',
                padding: '.75rem 1.25rem',
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
                fontWeight: '600',
                color: '#333'
            }}
        ><FontAwesome
            name = 'file-download'
            style = {{
                marginRight: '.5rem'
            }}
        />Download it here!</a>
    </div>
  )
}

export default SideCV