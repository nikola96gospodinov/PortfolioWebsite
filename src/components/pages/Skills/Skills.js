import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Skills.css'

class Skills extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div
                className = "skillsPageDiv"
            >
                <div
                    style = {{
                        background: '#333'
                    }}
                >
                    <div
                        className = "left"
                        
                    >
                        <h1
                            style = {{
                                color: '#ccc',
                                margin: '12rem 0 2rem 0',
                                fontSize: '2.4rem'
                            }}
                        ><i>Skills</i> - a boring list</h1>
                        <h2
                            style = {{
                                color: '#ccc',
                                marginBottom: '2rem',
                                paddingRight: '3.8rem',
                                fontWeight: '400',
                                fontSize: '1.4rem'
                            }}
                        >If you want just a simple list of the skills that I have that you can easily download and show to your boss or keep as a reference then this is the right section for you! </h2>
                        <Link
                            to = "/skills/boring"
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
                        >Get the List</Link>
                    </div>
                </div>
                <div
                    style = {{
                        background: '#ccc'
                    }}
                >
                    <div
                        className = "right"
                    >
                         <h1
                            style = {{
                                color: '#333',
                                margin: '12rem 0 2rem 0',
                                fontSize: '2.4rem'
                            }}
                        ><i>Skills</i> - the unboring stroy</h1>
                        <h2
                            style = {{
                                color: '#333',
                                marginBottom: '2rem',
                                paddingLeft: '3.8rem',
                                fontWeight: '400',
                                fontSize: '1.4rem'
                            }}
                        >If you don't want just a boring list of the skills that I have but want to read the story of my journey towards acquiring my skills then this is the right section for you!</h2>
                        <Link
                            to = "/skills/unboring"
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
                        >Discover the Story</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills