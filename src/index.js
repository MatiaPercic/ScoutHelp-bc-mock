import express from "express";
import cors from "cors";

import {volonteri} from "./volonteri.js";
import { admins } from "./admins.js"
import { obliciRada } from "./obliciRada.js";
import { voditeljskeAktivnosti } from "./voditeljskeAktivnosti.js";

const app= express();
const port= 3100;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200)
    res.send("ScoutHelp") }
);

//svi volonteri
app.get("/volonter", (req, res) => {
    res.send(volonteri);
  });




app.listen(port, () => console.log(`Slušam na portu ${port}!`));