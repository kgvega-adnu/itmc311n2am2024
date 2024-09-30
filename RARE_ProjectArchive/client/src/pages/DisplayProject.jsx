import React from 'react';
import { useLocation, Link } from 'react-router-dom';

//CSS
import './DisplayProject.css'

//Components
import Footer from '../components/Footer'
import SearchNavbar from '../components/SearchNavbar'
import ProjectOverview from '../components/ProjectOverview.jsx';
import PdfViewer from '../components/PdfViewer.jsx';
import ProjectOptionSidebar from '../components/ProjectOptionSidebar.jsx';

//Assets
import backArrow from '../assets/back.svg'
import manuscript from '../assets/manuscript-sample.pdf'


const DisplayProject = () => {
    const location = useLocation();
    const project = location.state;
    console.log(project);
    
    return (
        <>
            <SearchNavbar/> 

            <div className="display-project-wrapper">

                <Link to="/browse" className="back-link"> <img src={backArrow} alt="Back Icon" className="back-icon"/>Back to results</Link>

                <div className='display-project-content'>

                    <div className="project-details">

                        <ProjectOverview project={project}/>

                        <div className='manuscript'>
                            <h2>Manuscript</h2>

                            <PdfViewer file={manuscript} />
                        </div>

                    </div>

                    <div className="project-sidebar">

                        <ProjectOptionSidebar
                            publishedDate={project.publishedDate}
                            modifiedDate={project.updatedAt}
                        />

                    </div>
                    
                </div>
            </div>
            
            <Footer/>
        </>
      )
}

export default DisplayProject