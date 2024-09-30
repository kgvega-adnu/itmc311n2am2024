import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//assets
import binIcon from "../assets/bin-icon.svg";
import addIcon from "../assets/add-icon.svg";
import uploadIcon from "../assets/upload-icon.svg";
import pdfIcon from "../assets/pdf-icon.svg";

//css
import "./AddUpdateForm.css";
import { responsiveFontSizes } from "@mui/material";

const UpdateForm = (props) => {
  const project = props.project;
  const id = project.id;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [abstract, setAbstract] = useState();
  const [proponents, setProponents] = useState([
    { firstName: "", middleName: "", lastName: "", suffix: "" },
  ]);
  const [uploadedFiles, setUploadedFiles] = useState({
    frontPage: null,
    manuscript: null,
  });

  useEffect(() => {
    setTitle(project.title);
    setPublishedDate(project.publishedDate.slice(0,10));
    setAbstract(project.abstract);
    setProponents(project.proponents);
    setKeywords(project.keywords)
    
  }, [])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleAbstractChange = (e) => {
    setAbstract(e.target.value);
    console.log(abstract);
  };

  const handleAddProponents = () => {
    setProponents([
      ...proponents,
      {
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
      },
    ]);
  };

  const handleDeleteProponents = (index) => {
    const newProponents = proponents.filter((_, i) => i !== index);
    setProponents(newProponents);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newProponents = [...proponents];
    newProponents[index][name] = value;
    setProponents(newProponents);
  };

  const handlePublishedDateChange = (e) => {
    setPublishedDate(e.target.value);
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevState) => ({
        ...prevState,
        [type]: file,
      }));
    }
  };

  const handleFileReplace = (type) => {
    setUploadedFiles((prevState) => ({
      ...prevState,
      [type]: null,
    }));
  };

  async function handlePublish () {
    // await fetch(`http://localhost:5012/api/projects/update/${id}`, {
    await fetch(`https://projectarchiveserver.vercel.app/api/projects/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        proponents: proponents,
        abstract: abstract,
        publishedDate: publishedDate,
        keywords: keywords,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      navigate("/manage-project", {state: {
        "title": title,
        "proponents": proponents,
        "abstract": abstract,
        "publishedDate": publishedDate,
        "updatedAt": Date.now(),
        "keywords": keywords,
      }})
    )
  };

  if (!title || !keywords || !proponents || !publishedDate || !abstract) {
    return <div>Loading!</div>;
  } else {    
    return (
      <div>
        <div className="form-frame">
          <div className="projectInfo">
            <h2>Project Information</h2>

            <div className="pTitle">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Project Title"
                onChange={(e) => handleTitleChange(e)}
                required
              />
            </div>

            <label>Proponent/s</label>
            {proponents.map((proponent, index) => (
              <div key={index} className="proponents-row">
                <div className="firstName">
                  <input
                    type="text"
                    name="firstName"
                    value={proponent.firstName}
                    placeholder="First Name"
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />
                </div>

                <div className="middleName">
                  <input
                    type="text"
                    name="middleName"
                    value={proponent.middleName}
                    placeholder="Middle Name"
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />
                </div>

                <div className="lastName">
                  <input
                    type="text"
                    name="lastName"
                    value={proponent.lastName}
                    placeholder="Last Name"
                    onChange={(e) => handleInputChange(index, e)}
                    required
                  />
                </div>

                <div className="suffix">
                  <input
                    type="text"
                    name="suffix"
                    value={proponent.suffix}
                    placeholder="Suffix"
                    onChange={(e) => handleInputChange(index, e)}
                  />

                  {proponents.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeleteProponents(index)}
                    >
                      <img src={binIcon} alt="delete" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddProponents}
              className="add-button"
            >
              <img src={addIcon} alt="add" />
              <span>Add Proponent</span>
            </button>

            <div className="date-key-row">
              <div className="Add-datePublished">
                <label>Date Published</label>
                <input
                  type="date"
                  name="date"
                  value={publishedDate}
                  placeholder="Published Date"
                  onChange={(e) => handlePublishedDateChange(e)}
                  required
                />
              </div>

              <div className="Add-keywords">
                <label>Keyword/s</label>
                <input
                  type="text"
                  name="keywords"
                  value={keywords}
                  placeholder="Keywords"
                  onChange={(e) => handleKeywordsChange(e)}
                  required
                />
              </div>
            </div>

            <div className="Abstract">
              <label>Abstract</label>
              <textarea
                type="text"
                name="abstract"
                value={abstract}
                placeholder="Abstract"
                onChange={(e) => handleAbstractChange(e)}
                required
              />
            </div>
          </div>

          <div className="projectFiles">
            <h2>Project File</h2>

            <div className="files-row">
              {/* <div className='frontPage'>
              <label>Front Page</label>
              <div className="drop-area">
                <img 
                  src={uploadedFiles.frontPage ? pngIcon : uploadIcon} 
                  alt="Upload" 
                  className="upload-icon" 
                />
                {uploadedFiles.frontPage ? (
                  <>
                    <span className="file-name">{uploadedFiles.frontPage.name}</span>
                    <button 
                      type="button" 
                      className="file-replace-btn" 
                      onClick={() => handleFileReplace('frontPage')}
                    >
                      Replace
                    </button>
                  </>
                ) : (
                  <>
                    <span>Drag and Drop File <br /> or</span>
                    <button type="button" className="file-browse-btn">Browse</button>
                  </>
                )}
                <input 
                  type="file" 
                  className="file-input" 
                  onChange={(e) => handleFileChange(e, 'frontPage')} 
                  accept=".png"
                />
              </div>
            </div> */}

              <div className="Manuscript">
                <label>Manuscript</label>
                <div className="drop-area">
                  <img
                    src={uploadedFiles.manuscript ? pdfIcon : uploadIcon}
                    alt="Upload"
                    className="upload-icon"
                  />
                  {uploadedFiles.manuscript ? (
                    <>
                      <span className="file-name">
                        {uploadedFiles.manuscript.name}
                      </span>
                      <button
                        type="button"
                        className="file-replace-btn"
                        onClick={() => handleFileReplace("manuscript")}
                      >
                        Replace
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        Drag and Drop File <br /> or
                      </span>
                      <button type="button" className="file-browse-btn">
                        Browse
                      </button>
                    </>
                  )}
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => handleFileChange(e, "manuscript")}
                    accept=".pdf"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="action-buttons">
        <button className="cancelbtn" onClick={() => navigate(-1)}>Cancel</button>
        <button className="publishbtn" onClick={() => handlePublish()}>
            Update Project
          </button>
        </div>
      </div>
    );
  }
};

export default UpdateForm;
