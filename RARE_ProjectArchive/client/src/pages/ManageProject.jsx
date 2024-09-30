import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//CSS
import "./ManageProject.css";

//Components
import Footer from "../components/Footer";
import MgrSearchNavbar from "../components/MgrSearchNavbar.jsx";
import ProjectOverview from "../components//ProjectOverview.jsx";
import ProjectOptionSidebar from "../components/ProjectOptionSidebar.jsx";
import ProjectSettingSidebar from "../components/ProjectSettingSidebar.jsx";

//Assets
import backArrow from "../assets/back.svg";
import manuscript from "../assets/manuscript-sample.pdf";

const ManageProject = (props) => {
  const id = props.id;
  const [project, setProject] = useState({
    id: id,
    title: "",
    proponents: [],
    publishedDate: "",
    updatedAt: "",
    abstract: "",
    keywords: [],
  });

  const fetchData = async () => {

    // For Development. Hide for deployment
    const response = await fetch(
      `http://localhost:5012/api/projects/get/${id}`
    );

    // For Deployment. Hide for development
    // const response = await fetch(
    //   `https://projectarchiveserver.vercel.app/api/projects/get/${id}`
    // );
    const resp = await response.json();
    const data = resp.data;
    const newProject = {
      id: id,
      title: data.title,
      proponents: data.proponents,
      publishedDate: data.publishedDate,
      updatedAt: data.updatedAt,
      abstract: data.abstract,
      keywords: data.keywords,
    };
    setProject(newProject);
  };

  useEffect(() => {
    fetchData();
    console.log(project);
    
  }, []);

  return (
    <div>
      <MgrSearchNavbar />

      <div className="display-project-wrapper">
        <Link to="/" className="back-link">
          {" "}
          <img src={backArrow} alt="Back Icon" className="back-icon" />
          Back to results
        </Link>

        <div className="display-project-content">
          <div className="project-details">
            <ProjectOverview project={project} />

            <div className="manuscript">
              <h2>Manuscript</h2>
            </div>
          </div>

          <div className="delete-project-sidebar">
            <ProjectOptionSidebar
              publishedDate={project.publishedDate}
              modifiedDate={project.updatedAt}
            />
            <ProjectSettingSidebar id={id} project={project} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ManageProject;
