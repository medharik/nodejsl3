const express = require("express");
const app = express();
app.use(express.json());
const port = 8088;

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbnode3",
});

connection.connect();

//ressource : produits
//liste des produits 
app.get("/produits", (req, res) => {
  connection.query("select * from produit", function (error, results, fields) {
    if (error) throw error;
    console.log("le resultat est ", results);
    res.json(results);
  });
});
//ajouter un produit 
app.post("/produits", (req, res) => {
    const {libelle,prix} = req.body;
  console.log(req.body);
//   let produit={libelle,p}

    connection.query("insert into produit set ? ",{libelle,prix} ,function (error, results, fields) {
      if (error) throw error;
      console.log("ajout ok  ", results);
      res.json(results.insertId);
    });
  });
//consulter un produit  
app.get("/produits/:id", (req, res) => {
const {id}=req.params;

  connection.query("select * from produit where id=?",[id] ,function (error, results, fields) {
    if (error) throw error;
    console.log("le resultat est ", results[0]);
    res.json(results[0]);
  });
});

app.listen(port);
