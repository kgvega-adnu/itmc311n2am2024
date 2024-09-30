import mongoose, { mongo } from "mongoose";

// Model for project
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    proponents: [
        {
            lastName: {
                type: String,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
            },
            suffix: {
                type: String,
            },
        }
    ],
    publishedDate: {
        type: Date,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    keywords: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

const Project = mongoose.model('Project', projectSchema);

export default Project;