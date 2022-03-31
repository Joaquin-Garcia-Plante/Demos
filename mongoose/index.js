require("./mongo");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Prueba = require("./models/Test");

//Moddlewares
app.use(cors());
app.use(express.json());

//Ruta para devolver todas las notas
app.get("/test", (req, res) => {
  Prueba.find({}).then((result) => {
    res.json(result);
  });
});

//Buscando una nota por el id
app.get("/test/:id", (req, res, next) => {
  const id = req.params.id;
  Prueba.findById(id)
    .then((result) => {
      if (result) {
        return res.json(result);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      next(err);
      // console.log(err);
      // //503 error dentro de nuestro servidor
      // res.status(400).end();
    });
});

//Postear en mi base de datos
//Para postear en mi base de datos voy a estar utilizando el schema que cree previamente
app.post("/test", (req, res) => {
  const test = req.body;
  if (!test.content) {
    return res.status(400).json({ error: 'required "content" field missing' });
  }
  //Creo mi nuevo test
  const newTest = new Prueba({
    name: test.name,
    content: test.content,
    date: new Date(),
    important: test.important || false,
  });

  //Lo guardo
  newTest.save().then((savedTest) => {
    res.json(savedTest);
  });
});

//Borrar algo de la db
app.delete("/test/:id", (req, res, next) => {
  const id = req.params.id;
  Prueba.findByIdAndRemove(id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((err) => {
      next(err);
    });
});

//utilizando un middleware para manejar errores
app.use((error, req, res, next) => {
  console.log(error);
  console.log(error.name);
  if (error.name === "CastError") {
    res.status(400).send({ error: "id use is malformed" });
  } else {
    res.status(500).end();
  }
});
app.listen(1337);
