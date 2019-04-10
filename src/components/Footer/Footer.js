import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {

    return(
        <footer 
            className = "container footer"
        >
            <div className = "column">
                <h2
                    style = {mainHeaderStyle}
                >Short Bio</h2>
                <hr
                    style = {hrStyle}
                />
                <p
                    style = {{
                        color: '#eee',
                        fontSize: '1.2rem',
                        marginBottom: '1rem'
                    }}
                >
                Recent university graduate with a wide variety of technical skills in the I.T. field combined with “human engineering” skills both practised and developed in a working environment.
                </p>
                <Link
                    to = "/about"
                    style = {{
                        color: '#ccc',
                        border: '2px solid #ccc',
                        padding: '.7rem 1rem',
                        display: 'inline-block',
                        width: '100%',
                        textAlign: 'center',
                        cursor: 'pointer',
                        fontSize: '1.1rem'
                    }}
                ><b>Learn More!</b></Link>
            </div>
            <div className = "column">
                <h2
                    style = {mainHeaderStyle}
                >Get in Touch</h2>
                <hr
                    style = {hrStyle}
                />
                <div
                    style = {{
                        width: '100%',
                        display: 'grid',
                        gridGap: '1rem',
                        gridTemplateColumns: '2fr 5fr'
                    }}
                >
                    <div>
                        <FontAwesome
                            name = "street-view"
                            style = {iconStyle}
                        />
                    </div>
                    <div>
                        <h3
                            style = {secondaryHeaderStyle}
                        >Location</h3>
                        <br/>
                        <h4
                            style = {tertieryHeadingStyle}
                        >Bristol, United Kingdom</h4>
                    </div>
                </div>
                <br/>
                <div
                    style = {{
                        width: '100%',
                        display: 'grid',
                        gridGap: '1rem',
                        gridTemplateColumns: '2fr 5fr'
                    }}
                >
                    <div>
                        <FontAwesome
                            name = "envelope"
                            style = {iconStyle}
                        />
                    </div>
                    <div>
                        <h3
                            style = {secondaryHeaderStyle}
                        >Email</h3>
                        <br/>
                        <h4
                            style = {tertieryHeadingStyle}
                        >nikola96gospodinov@gmail.com</h4>
                    </div>
                </div>
                <br/>
                <div
                    style = {{
                        width: '100%',
                        display: 'grid',
                        gridGap: '1rem',
                        gridTemplateColumns: '2fr 5fr'
                    }}
                >
                    <div>
                        <FontAwesome
                            name = "phone"
                            style = {iconStyle}
                        />
                    </div>
                    <div>
                        <h3
                            style = {secondaryHeaderStyle}
                        >Mobile</h3>
                        <br/>
                        <h4
                            style = {tertieryHeadingStyle}
                        >07763979908</h4>
                    </div>
                </div>
            </div>
            <div className = "column">
                <h2
                    style = {mainHeaderStyle}
                >Navigate</h2>
                <hr
                    style = {hrStyle}
                />
                <ul>
                    <li style = {listStyle}><Link to = "/home" style = {linkStyle}>Home</Link></li>
                    <li style = {listStyle}><Link to = "/skills" style = {linkStyle}>Skils</Link></li>
                    <li style = {listStyle}><Link to = "/projects" style = {linkStyle}>Projects</Link></li>
                    <li style = {listStyle}><Link to = "/about" style = {linkStyle}>About</Link></li>
                </ul>
            </div>
        </footer>
    )
}

const mainHeaderStyle = {
    color: '#ccc',
    fontSize: '1.8rem',
    marginBottom: '.5rem'
}

const hrStyle = {
    width: '100%',
    marginBottom: '.8rem'
}

const iconStyle = {
    fontSize: '2.5rem',
    padding: '1rem',
    color: '#ccc',
    border: '1px solid #ccc'
}

const secondaryHeaderStyle = {
    color: '#ccc',
    fontSize: '1.5rem'
}

const tertieryHeadingStyle = {
    fontSize: '1rem',
    color: '#dccc',
    fontWeight: '300'
}
const listStyle = {
    listStyle: 'none',
    marginBottom: '.8rem'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#eee',
    fontSize: '1.2rem',
    cursor: 'pointer'
}

export default Footer