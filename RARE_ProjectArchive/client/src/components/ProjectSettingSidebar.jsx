import React from "react";

//Css
import "./ProjectSettingSidebar.css";

//Assets
import settings from "../assets/settings-icon.svg";
import alert from "../assets/alert-icon.svg";
import { Link } from "react-router-dom";

const ProjectSettingSidebar = (props) => {
  const id = props.id;
  const project = props.project;

  const deleteProject = async () => {
    // return await fetch(`http://localhost:5012/api/projects/delete/${id}`, {
    return await fetch(`https://projectarchiveserver.vercel.app/api/projects/delete/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="project-settings">
      <span className="setting-header">
        <img src={settings} alt="setting-icon" className="setting-icon" />
        <strong>Project Settings</strong>
      </span>

      <div className="alert-message">
        <img src={alert} alt="alert-icon" className="alert-icon" />
        <span className="alert-text">
          These settings can have significant impacts.
        </span>
      </div>

      <span>
        <strong>Update Project</strong>
      </span>
      <span>Updating a project is permanent and cannot be undone.</span>

      <div className="setting-buttons">
        <Link to="/update-project" state={project}>
          <button className="update-button">Update</button>
        </Link>
      </div>

      <span>
        <strong>Delete Project</strong>
      </span>
      <span>Deleting a project is permanent and cannot be undone.</span>

      <div className="setting-buttons">
        <Link to="/browse">
          <button className="delete-button" onClick={deleteProject}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSettingSidebar;
