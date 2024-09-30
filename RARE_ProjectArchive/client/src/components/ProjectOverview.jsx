import React from 'react';

//CSS
import './ProjectOverview.css'

const ProjectOverview = ({project}) => {
    
    return (
        <div className="project-overview">
            <h1>{project.title}</h1>
            <span className="proponents">
                {project.proponents.map((proponent, index) => {
                    if (index < (project.proponents.length - 1)) {
                        return (
                            <span key={index}>{proponent.lastName}, {proponent.firstName} - </span>
                        )
                    } else {
                        return (
                            <span key={index}>{proponent.lastName}, {proponent.firstName}</span>
                        )
                    }
                }
                )}
            </span>

            <div className="abstract">
                <h2>Abstract</h2>
                    <p>{project.abstract}</p>
            </div>

            <div className="keywords">
                <h3>Keywords</h3>
                <div className="keyword-container">
                    {project.keywords.map((keyword, index) => {
                        return (
                            <span className="keyword" key={index}>{keyword}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectOverview