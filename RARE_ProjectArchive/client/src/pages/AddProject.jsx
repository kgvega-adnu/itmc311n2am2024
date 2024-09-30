import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import Footer from '../components/Footer';
import ManagerNavbar from '../components/ManagerNavbar';
import AddForm from '../components/AddForm';

//assets
import backArrow from '../assets/back.svg';

//css
import './AddProject.css';

const AddProject = () => {
  return (
    <div className="content">
      <ManagerNavbar />

      <div className='header'>
        <Link to="/" className='back-to-home'>
          <img src={backArrow} alt="Back" />
          <span>Back to Home</span>
        </Link>

        <h1>Add Project</h1>
      </div>
      
      <AddForm /> 
      
      <Footer />
    </div>
  );
};

export default AddProject;
