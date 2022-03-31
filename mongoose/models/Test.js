require("../mongo");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

//!Definiendo schemas
const testSchema = new Schema({
  name: String,
  content: String,
  date: Date,
  important: Boolean,
});

//Eliminando el _id y __v

testSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
//!Creando el modelo
var Prueba = model("Prueba", testSchema);

module.exports = Prueba;

// let Cargar = function () {
//   //!Creando un documento a partir de mi modelo
//   const newItem = new Prueba({
//     content: "Piola",
//     date: new Date(),
//     important: true,
//   });
//   newItem.save().then((result) => {
//     //   console.log(result);
//     mongoose.connection.close();
//   });
// };
// const newItem = new Prueba({
//   name: "Piola",
//   content: "lalala",
//   date: new Date(),
//   important: true,
// });

// newItem
//   .save()
//   .then((result) => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
