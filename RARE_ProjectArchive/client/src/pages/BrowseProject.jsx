import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BrowseSearchbar from '../components/BrowseSearchbar'
import AlphabetList from '../components/AlphabetList'

import './BrowseProject.css'
import DisplayAllProjects from '../components/DisplayAllProjects'

import next from '../assets/sort-next.svg'
import nextx2 from '../assets/sort-next-x2.svg'
import back from '../assets/sort-back.svg'
import backx2 from '../assets/sort-back-x2.svg'

import { Skeleton } from '@mui/material'


const BrowseProject = () => {
  const [ projects, setProjects ] = useState();
    
    const fetchData = async() => {
    // For Development. Hide for deployment
    const response = await fetch('http://localhost:5012/api/projects/gets');
    // For Deployment. Hide for development
    // const response = await fetch('https://projectarchiveserver.vercel.app/api/projects/gets')
    const data = await response.json()
    setProjects(data.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

    if (projects == undefined) {  //Loading
      return (
        <div className="content">
          <Navbar />   
          <div className="search-bar-header">
            <div className="search-bar-header-text">
              <span>Gathering Projects...</span>
            </div>
            <BrowseSearchbar />
          </div>
        
          <SkeletonLoader />
          
          {/* Next - Back buttons */}
          <div className="sort-wrapper">
            <a href=""><img src={back}/></a>
            <a href=""><img src={backx2}/></a>
            <span>Page 0 of 0</span>
            <a href=""><img src={next}/></a>
            <a href=""><img src={nextx2}/></a>
          </div>
          <Footer />
        </div>
      )
    }
     else {    
    return (
      <div className="content">
        <Navbar /> 
        <div className="search-bar-header">
          <div className="search-bar-header-text">
            <span>Showing <span className='dynamic-result-counter'>{projects.length}</span> projects</span>
          </div>
          <BrowseSearchbar />
        </div>
        
        <div className="results-wrapper">
          <div >
            <div className="display-projects-wrapper">
            {
              projects.map(project => (
                <DisplayAllProjects key={project._id} id={id}/>
              ))
            }
            </div>
          </div>
  
          <div className="sort-wrapper">
            <AlphabetList />
          </div>
        </div>
        {/* Next - Back buttons */}
        <div className="sort-wrapper">
            <a href=""><img src={back}/></a>
            <a href=""><img src={backx2}/></a>
            <span>Page 0 of 0</span>
            <a href=""><img src={next}/></a>
            <a href=""><img src={nextx2}/></a>
          </div>
        <Footer />
      </div>
    )
  }
}

const SkeletonLoader = () => (
  <div className="preloader-wrapper">
    {[...Array(5)].map((_, index) => (
      <div className="skeleton-wrapper" key={index}>
        <Skeleton variant="text" sx={{ fontSize: '3rem' }} width="70%" />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="90%" />
      </div>
    ))}
  </div>
);


export default BrowseProject