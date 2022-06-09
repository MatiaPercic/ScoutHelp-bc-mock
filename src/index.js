import express from "express";
import cors from "cors";

import {volonteri} from "./volonteri.js";
import { admins } from "./admins.js"
import { aktivnosti } from "./aktivnosti.js";
import { volontiranje } from "./volontiranje.js";


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
    res.status(200);
    res.send(volonteri);
  });

  //volonter po id-u -- ne radi??
app.get("/volonter/:id", (req,res) =>{
    const id=String(req.params.id);
    const jedanVolonter= volonteri.find((volonter) => volonter.id === id);
    res.status(200);
    res.send(jedanVolonter);
});


//dodavanje novog volontera
app.post("/volonter", (req, res) => {
    const { id, ime, prezime, godine } = req.body;
    volonteri.push({ id: id, ime: ime, prezime: prezime, godine: godine });
    res.statusCode = 201;
    res.send(volonteri);
  });

//promjena godina volonteru
app.patch("/volonter/:id", (req, res) => {
    const { id } = req.params;
    const { noveGodine } = req.body;
    volonteri.find((volonter) => volonter.id === id).godine = noveGodine;
    res.status(200);
    res.send(volonteri);
  });



//svi administratori
app.get("/administratori" ,(req,res) => {
    res.status(200);
    res.send(admins);
})


//sve aktivnosti
app.get("/aktivnost", (req,res) => {
    res.status(200);
    res.send(aktivnosti);
})


//aktivnost na određen datum
app.get("/aktivnost/:datum", (req,res) =>{
    const datum=String(req.params.datum);
    const jednaAktivnost= aktivnosti.find((aktivnost) => aktivnost.datum===datum); 
    res.status(200);
    res.send(jednaAktivnost);

})

//ispis svih volonterstva 
app.get("/volontiranje", (req,res) => {
    res.status(200);
    res.send(volontiranje)
})

//prikaz volontiranja koje izvršava pojedinčni volonter
app.get("/volontiranje/:id", (req,res) => {
    const id=Number(req.params.id);
    const volonterVolontira=  volontiranje.find((volontiranje) => volontiranje.volonter.id==id);
    res.status(200);
    res.send(volonterVolontira);
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`));