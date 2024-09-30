import React, { useEffect } from 'react'
import archiveSearch from '../assets/search-the-archive.svg'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainSearchBar from '../components/MainSearchbar';

import '../App.css'

const SearchProject = () => {
  useEffect(() => {
    console.log('SearchProject component loaded');
  },[])

  return (
    <div className="content">
      <Navbar/>
        
      <div className="search-page-wrapper">
        <div className="archiveSearch-img">
          <img src={archiveSearch} alt="Search the archive"/>
        </div>

        <MainSearchBar/>
        <div className="subheader-wrapper">
          <span>An Archive of <span id='no-of-projects'>0</span> Senior Projects, Case Studies, and more</span>
        </div>
        
      </div>
      
      <Footer />
    </div>
  )
}

export default SearchProject