import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

//CSS
import './SearchNavbar.css'

//Assets
import archiveLogo from '../assets/archive-full.svg'

//Component
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="nav">
      <div>
      <Link to="/"><img src={archiveLogo} alt="" /></Link>
      </div>

      <div className="search-bar">
       <div className="input">
          <FaSearch id="search-icon" />
          <input
            placeholder="Project Name, Keyword, or Proponent"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>

      <div className='user-options'>
        <button className='loginButton'>Log in as Admin</button>
        <div className="ThemeToggle">
          <ThemeToggle />
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Navbar