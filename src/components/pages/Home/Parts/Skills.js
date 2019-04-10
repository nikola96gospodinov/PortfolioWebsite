import React from 'react'
import { Link } from 'react-router-dom'

import './Skills.css'

const Skills = () => {
    return(
        <div
            className = "mainContainer"
            id = "Skills"
        >
            <div
                style = {{
                    background: '#ccc'
                }}
            >
                <div
                    className = "boring"
                >
                    <h1><i>Skills</i> - a boring list</h1>
                    <h2>If you want just a simple list of the skills that I have that you can easily download and show to your boss or keep as a reference then this is the right section for you! </h2>
                    <Link
                        to = "/skills/boring"
                        style = {{
                            color: '#333',
                            border: '2px solid #333',
                            padding: '1rem 2rem',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            marginBottom: '2rem',
                            display: 'inline-block',
                            cursor: 'pointer'
                        }}
                    >Get the List</Link>
                </div>
            </div>
            <div
                style = {{
                    background: '#333'
                }}
            >
                <div
                    className = "unboring"
                >
                    <h1><i>Skills</i> - the unboring stroy</h1>
                    <h2>If you don't want just a boring list of the skills that I have but want to read the story of my journey towards acquiring my skills then this is the right section for you!</h2>
                    <Link
                        to = "/skills/unboring"
                        style = {{
                            color: '#ccc',
                            border: '2px solid #ccc',
                            padding: '1rem 2rem',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            marginBottom: '2rem',
                            display: 'inline-block',
                            cursor: 'pointer'
                        }}
                    >Discover the Story</Link>
                </div>
            </div>
        </div>
    )
}

export default Skills 