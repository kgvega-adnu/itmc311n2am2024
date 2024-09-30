import React from 'react'
import { Link } from 'react-router-dom';

//assets
import archiveLogo from '../assets/archive-full.svg'

//components
import './Navbar.css'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className="nav">
      <div>
      <Link to="/"><img src={archiveLogo} alt="" /></Link>
      </div>

      <div className='user-options'>
        <Link to="/browse" className='browseButton'>Browse Projects</Link>
        <button className='loginButton'>Log in as Admin</button>
        <div className="ThemeToggle">
          <ThemeToggle />
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Navbar