import express from "express";
import cors from "cors";
import { volonteri } from "./volonteri";
import { admins } from "./admins"
import { obliciRada } from "./obliciRada";


const app= express();
const port= 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200)
    res.send("ScoutHelp") }
);


app.listen(port, () => console.log(`Slušam na portu ${port}!`));