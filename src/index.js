import express from "express";
import cors from "cors";

const app=express();
const port= 3000;

//console.log('runs')

app.use(cors());
app.use(express.json());
