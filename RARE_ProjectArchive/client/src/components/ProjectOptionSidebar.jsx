import React from 'react';

//Css 
import './ProjectOptionSidebar.css'

//Assets
import pdf from '../assets/pdf-icon.svg'
import cite from '../assets/cite.svg'

const ProjectOptionSidebar = ({publishedDate, modifiedDate}) => {

    return(
        <div className="project-options">
            <span><strong>Publication Date:</strong> {publishedDate.slice(0,10)}</span>
            <br/>
            <span><strong>Modified Date:</strong> {modifiedDate.slice(0,10)}</span>
            <div className='buttons'>
                <button className="download-button">
                <img src={pdf} alt="Download Icon" className="button-icon"/>Download PDF</button>

                <button className="cite-button">
                <img src={cite} alt="Cite Icon" className="button-icon"/>Cite Study</button>
            </div>
        </div>
    )

}

export default ProjectOptionSidebar