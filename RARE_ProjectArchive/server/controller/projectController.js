import Project from "../models/projectsModel.js";

// [RARE-3] Create Get Project List Script
// Controller to get all the projects 
export const getProjectList = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.status(200).json({success: true, data: projects})
    } catch (error) {
        res.status(500).json({success: false, message: "Project list fetch error"})
    }
}

// [RARE-2] Create Get Project Script
// Controller to get a specific projects 
export const getProject = async (req, res) => {
    const {id} = req.params;
    
    try {
        const project = await Project.findById(id);
        res.status(200).json({status: true, data: project});
    } catch (error) {
        res.status(404).json({success: false, message: "Project not found"});
    }
}

// [RARE-1] Create Add Project Script
// Controller to add a project 
export const addProject = async (req,res) => {
    const project = req.body;

    console.log("Project:");
    console.log(project);
    

    if (!project.title ) {
        return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    const newProject = new Project(project);

    try {
        await newProject.save();
        res.status(201).json({success: true, message: "Project created"});
    } catch (error) {
        console.error("Error in project creation", error.message);
        res.status(500).json({success: false, message: "Project creation failed"});
    }
}

// [RARE-5] Create Update Project Script
// Controller to update a project 
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const project = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, project, {new: true});
        res.status(200).json({success: true, data: updatedProject});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

// [RARE-4] Create Delete Project Script
// Controller to delete a projects 
export const deleteProject =  async (req, res) => {
    const {id} = req.params;
    try {
        await Project.findByIdAndDelete(id);
        res.status(200).json({status: true, message: "Project deleted"});
    } catch (error) {
        res.status(404).json({success: false, message: "Project not found"});
    }
}