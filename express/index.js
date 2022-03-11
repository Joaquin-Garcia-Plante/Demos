//Para arrancar a usar express debo primero requerirlo
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
//!Modularizar los paths
const { USERS, USERS_ID } = require("./paths");

//!Modularizar las funciones
const { users } = require("./controllers/users");

//!Modularizar la data

const { data } = require("./data/index");
//!Creamos una aplicacion de express
//Sirve para crear el servidor
const app = express();

//!Aplicando middleware para que se pueda parsear la informacion que se recibe por body
//app.use nos permite usar un middleware
//De esta forma estamos utilizando el middleware para todos los metodos y todas las rutas
app.use(express.json());
//Este middleware sirve para loguear todas las solicitudes
app.use(morgan("dev"));

//!llamando a mi router
app.use("/", router);
//*Usando el middleware solo para la ruta /
//app.use("/", express.json());
//Con el app.use tenemos rutas parciales (para este ejemplo desde / para adelante matchea con todas las demas rutas)

//!Creando rutas
//Voy a enviar mis datos atraves del res.send
//Son rutas exactas
//Tambien podemos aplicar el middleware colocandolo como segundo parametro dentro del app.method (puedo colocar tantos como yo quiera)
//Siempre el ultimo argumento de todos es la funcion
// app.get("/", (req, res) => {
//   //Recibiendo data del body
//   //Para recibir la informacion del body express necesita una libreria ya que no sabe parsear la informacion que le llega del body(json)
//   let { name } = req.body;
//   res.send(`<h1>Holaa ${name}</h1>`);
// });
// app.get(USERS, users);
// //Esta ruta nos va a permitir leer un id que nos llegue por parametro
// app.get(USERS_ID, (req, res) => {
//   //Para obtener el id
//   const { id } = req.params;
//   const user = users.find((user) => user.id === Number(id));
//   if (!user) return res.sendStatus(404);
//   res.send(user);
// });
//!Rutas protegidas
//Por ejemplo solo quiero que la ruta hola solo se ejecute ante un determinado apikey
// app.get("/hola", auth, (req, res) => {
//   let { name } = req.body;
//   res.send(`<h1>Holaa ${name}</h1>`);
// });

//Para proteger mi ruta necesito una funcion que seria como nuestro propio middleware
// function auth(req, res, next) {
//   //Como leer querys
//   const { api_key } = req.query;
//   //Nos falta agregar el next para que la funcion siga, de lo contrario se quedara trabada aqui
//   if (api_key === undefined) return res.sendStatus(401);
//   next();
// }

//Para que el servidor escuche peticiones:
app.listen(1337);
