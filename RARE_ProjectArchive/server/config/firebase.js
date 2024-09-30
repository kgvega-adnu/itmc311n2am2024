import { initializeApp } from "firebase/app";
import dotenv from 'dotenv';
import { getAuth } from "firebase/auth";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "rare-archive.firebaseapp.com",
  projectId: "rare-archive",
  storageBucket: "rare-archive.appspot.com",
  messagingSenderId: "219736491875",
  appId: "1:219736491875:web:f7b52c5e38306755cdf556",
  measurementId: "G-L13FMMCT4W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)