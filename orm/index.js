const { db, User, Todo } = require("./db");
const { Op } = require("sequelize");
//importo la instancia de sequelize (db)
//funcion asincrona auto-invocada
(async () => {
  //el sync lo que hace es sincronizar el modelo si es que este no existe previamente, quiere decir que si el modelo ya esta en la db este sync sigue de largo
  //agregando {alter: true} lo que hacemos es evitar este comportamiento, es decir modifica la tabla
  //{force: true} esto lo que hace es syncronizar el modelo, si encuentra la tabla la va a eliminar y va a crear otra
  // await User.sync({ alter: true });
  // await Todo.sync({ force: true });

  //para no tener que sincronizar tabla por tabla lo que puedo hacer es:
  db.sync({ alter: true });
  //esto sincroniza todos los modelos a la misma vez

  //! Creacion

  // primer forma
  // const user = User.build({
  //   firstName: "Joaquin",
  //   lastName: "Garcia",
  //   email: "jg@gmail.com",
  // });
  // guardo el registro
  // await user.save();

  //segunda forma

  // const user2 = await User.create({
  //   firstName: "Manuuuu",
  //   lastName: "Fortnite",
  //   email: "Manu@gmail.com",
  // });
  // console.table(user2.toJSON());

  //*Crear si es que el registro no existe (findOrCreate)
  //este metodo me permite buscar (con el where) y defaults asigna las propiedades
  //El metodo me devuelve el usuario creado y ademas un booleano indicando si existia o no previamente en la db
  // const [user3, userCreated] = await User.findOrCreate({
  //   where: { email: "malu@hotmai.com" },
  //   defaults: {
  //     firstName: "Malu",
  //     lastName: "Fortnite",
  //     email: "malu@hotmail.com",
  //   },
  // });
  // console.table([user3.toJSON(), userCreated]);

  //!Busquedas en mi db

  //*buscar todos los registros (findAll)
  //este metodo me trae un arreglo de instancias en sequelize, pero podemos hacer una conversion para pasarlo a objetos
  //la instancia de los datos tiene un metodo toJSON que extrae solo el objeto plano de toda la informacion que trae
  //en el metodo tambien podemos utilizar la propiedad atributes para indicar los campos que deseamos traer unicamente
  // const users = await User.findAll({ attributes: ["firstName", "email"] });
  // const users = await User.findAll();

  //*Buscar todos aquellos que coincidan con una palabra
  // const users = await User.findAll({ where: { firstName: "Joaquin" } });

  //*Busquedas utilizando operadores
  //en este caso estamos buscando todos los registros que contengan una "o" en su firstName

  // const users = await User.findAll({
  //   where: { firstName: { [Op.iLike]: "%u%" } },
  // });

  //tambien podemos usar propiedades adicionales en las busquedas
  //limit sirve para indicar cuantos queremos traer
  //offset sirve para saltear al primero y quedarse con el segundo (es un salteo)
  //con order podremos ordenar el resultado de la busqueda

  // const users = await User.findAll({
  //   where: { firstName: { [Op.iLike]: "%u%" } },
  //   // limit: 1,
  //   // offset: 1,
  //   order: [["firstName", "desc"]],
  // });

  //*Trayendo solamente un registro
  //Utilizando el findOne podemos hacer una busqueda el cual solo nos va a traer el primer registro que coincida con la busqueda
  // const users = await User.findOne({
  //   where: { firstName: { [Op.iLike]: "%u%" } },
  // });

  //*Buscando por id
  //Utilizando findByPk podemos buscar un registro por su id
  // const userId = await User.findByPk(18);

  //*Actualizando un registro

  //Para actualizar un registro podemos utilizar el metodo update
  //nos pide lo que queremos actualizar (primer parametro) y luegp un criterio de busqueda (segundo parametro)
  //este metodo nos va a devolver el numero de elementos que actualizo y los usuarios [totalUsersUpdated, updateUsers]

  // const response = await User.update(
  //   //lo que queremos actualizar

  //   { firstName: "MANUUUUUUUUUUUUUUUUUUU" },

  //   //criterio de busqueda
  //   { where: { email: "Manu@gmail.com" } }
  // );
  // console.table(response);
  // console.log(userId.toJSON());
  // console.table(users.map((user) => user.toJSON()));
  // console.log(users.toJSON());
})();

//! explicacion del codigo sin modularizar
// const { Sequelize, Model, DataTypes } = require("sequelize");

//Creando conexion a partir de una URI (es una cadena de conexion)
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// const sequelize = new Sequelize(
//   "postgres://postgres:2345@localhost:5432/demoorm"
// );

//Creando nuestro modelo
//El modelo es el armado de una entidad (tabla)

// class User extends Model {}

//init recibe dos parametros, por un lado los atributos y por otro lado la configuracion para ese modelo
//para la configuracion debemos pasarle la instancia de sequelize

// User.init(
//   {
//     firstName: { type: DataTypes.STRING(40) },
//     lastName: { type: DataTypes.STRING(40) },
//     email: { type: DataTypes.STRING(40) },
//   },
//   { sequelize, tableName: "user" }
// );

// //!otra forma de crear nuestro modelo
//agarra nuestra instancia y define el modelo user, luego establece sus atributos
// const User = sequelize.define("User", {
//   firstName: {
//     type: DataTypes.STRING,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//   },
// });
