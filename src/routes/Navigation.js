import React from 'react'
import { Link } from 'react-router-dom';
import '../style/NavStyle.css'

const Navigation = () => {
    return (
        <nav className='Nav'>
            <ul>
                <li className='Menu_li'><Link to="/map">Map</Link></li>
                <li className='Menu_li'><Link to="/">Home</Link></li>
                <li className='Menu_li'><Link to="/profile"> profile</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation
