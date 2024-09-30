import express from 'express';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectsRoute.js';
import adminRoute from './routes/adminRoute.js';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

var conn;

// Conect to Database Function
const connectDB = async() => {
    console.log("Connecting to Database.");
    try {
        conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 means fail and 0 means success
    }
};


// Use express as an API to transfer data from Server to Client
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: [
            "https://projectarchiveserver.vercel.app", 
            "https://projectarchive.vercel.app", 
            "http://localhost:5173",
            "http://localhost:5012" 
        ],
        methods: ["POST", "DELETE", "GET", "PUT"],
        credentials: true,
        
    }
))
const PORT = process.env.PORT || 5011

const __dirname = path.resolve();

// Server Routes used when fetching and to activate server
app.use(express.urlencoded({ extended: false }));
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoute);
app.get("/", (req, res) => {
    connectDB();
    res.status(201).json({success: true, message: "Server is ready"});
    console.log(conn.connection.host);
})

export default app;

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
