import React, { useEffect, useState } from "react";
import divider from "../assets/ellipse-divider.svg";

import "./DisplayAllProjects.css";
import { Link } from "react-router-dom";

const DisplayAllProjects = ({ id }) => {
  const [projects, setProjects] = useState();

  // [RARE-23] Setup Display Projects (Connect Get Project List Script)
  // Connect Backend Get Project List Script to Frontend
  const fetchData = async () => {
    // For Development. Hide for deployment
    const response = await fetch(`http://localhost:5012/api/projects/get/${id}`);
    // For Deployment. Hide for development
    // const response = await fetch(`https://projectarchiveserver.vercel.app/api/projects/get/${id}`)
    const data = await response.json();
    setProjects(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const title = project.title;
  const abstract = project.abstract;
  const publishedDate = project.publishedDate.substr(0, 4);
  let proponents = "";
  if (project.proponents.length > 2) {
    proponents = project.proponents[0].lastName + " et al.";
  } else {
    project.proponents.forEach((proponent, index) => {
      if (index < project.proponents.length - 1) {
        proponents += `${proponent.lastName}, ${proponent.firstName} - `;
      } else {
        proponents += `${proponent.lastName}, ${proponent.firstName}`;
      }
    });
  }

  return (
    <>
      {/* Placeholder lang to, i think you can add a loop here that will iterate throughout the dynamic data */}
      <div className="result-wrapper">
        <Link to="/project-details" state={project}>
          <span className="result-title">{title}</span>
          <div className="proponent-date-wrapper">
            <span className="proponent">{proponents}</span>
            <img src={divider} alt="" className="divider" />
            <span className="date">{publishedDate}</span>
          </div>
          <span className="abstract-snippet">{abstract}</span>
        </Link>
      </div>
    </>
  );
};

export default DisplayAllProjects;
