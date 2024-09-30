import express from 'express';
import { addProject, deleteProject, getProject, getProjectList, updateProject } from '../controller/projectController.js';

const router = express.Router();

// get all projects list route
router.get("/gets", getProjectList);

// get specific project route
router.get("/get/:id", getProject);

// add a project route
router.post("/add", addProject);

// update a project route
router.put("/update/:id", updateProject);

// delete a project route
router.delete("/delete/:id", deleteProject);

export default router;