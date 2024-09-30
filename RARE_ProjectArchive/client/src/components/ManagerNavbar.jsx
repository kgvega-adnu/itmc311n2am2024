import React from 'react'
import { Link } from 'react-router-dom';

//assets
import archiveLogo from '../assets/archive-full.svg'
import userProfile from '../assets/manager-profile.svg'

//components
import './ManagerNavbar.css'
import ThemeToggle from './ThemeToggle'

const ManagerNavbar = () => {
  return (
    <div className="nav">
      <div>
      <Link to="/"><img src={archiveLogo} alt="" /></Link>
      </div>

      <div className='user-options'>
        <Link to="/" className='manageButton'>Manage Projects</Link>
        <Link to="/" className='userprof'><img src={userProfile} alt="" /></Link>
        <div className="ThemeToggle">
          <ThemeToggle />
        </div>
      </div>
      
    </div>
  )
}

export default ManagerNavbar