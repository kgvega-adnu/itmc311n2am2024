import React from 'react'
import { Link, useLocation } from 'react-router-dom';

//Components
import Footer from '../components/Footer';
import ManagerNavbar from '../components/ManagerNavbar';
import UpdateForm from '../components/UpdateForm';

//Assets
import backArrow from '../assets/back.svg';

//CSS
import './UpdateProject.css';

const UpdateProject = () => {
  const location = useLocation();
  const project = location.state;
  //const fetchProject = /* Fetch project data code */;

  return (
    <div className="content">
    <ManagerNavbar />

    <div className='header'>
      <Link to="/" className='back-to-home'>
        <img src={backArrow} alt="Back" />
        <span>Back to Home</span>
      </Link>

      <h1>Update Project</h1>
    </div>
    
    <UpdateForm project={project}/> 
    
    <Footer />
  </div>
  )
}

export default UpdateProject