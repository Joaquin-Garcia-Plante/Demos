const mongoose = require("mongoose");
const connectionString = `mongodb+srv://Admin:FZOFagjpIXKS4eCs@cluster0.yrgkb.mongodb.net/Testing2?retryWrites=true&w=majority`;

//!Conexion a mongo db
mongoose
  .connect(connectionString)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch((err) => console.error(err));

// //!Definiendo schemas
// const testSchema = new Schema({
//   name: { type: String, unique: true },
//   content: String,
//   date: Date,
//   important: Boolean,
// });

// //!Creando el modelo
// var Prueba = model("Prueba", testSchema);

// const newItem = new Prueba({
//   name: "Piola",
//   content: "lalala",
//   date: new Date(),
//   important: true,
// });

// const newItem2 = new Prueba({
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
//     console.error(err);
//   });

// newItem2
//   .save()
//   .then((result) => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.error(err);
//   });
