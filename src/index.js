import express from "express";
import cors from "cors";
import { volonteri } from "./volonteri";
import { admins } from "./admins"
import { obliciRada } from "./obliciRada";
import { voditeljskeAktivnosti } from "./voditeljskeAktivnosti";

const app= express();
const port= 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200)
    res.send("ScoutHelp") }
);

app.get("/volonter", (req,res) =>{
    res.status(200);
    res.json(volonteri)
});


app.listen(port, () => console.log(`Slušam na portu ${port}!`));