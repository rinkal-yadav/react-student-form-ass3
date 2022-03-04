import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul type="none">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/student'>Students</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>

        </ul>
    </div>
  )
}

export default Header