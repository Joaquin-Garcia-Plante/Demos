//este archivo va a tener la conexion

const { Sequelize } = require("sequelize");

//Creando conexion a partir de una URI (es una cadena de conexion)
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize("postgres://postgres:2345@localhost:5432/demo");
//lo importamos y lo inicializamos pasandole sequelize
const User = require("./models/User")(sequelize);
const Todo = require("./models/Todo")(sequelize);

//!Relaciones
User.hasMany(Todo);
Todo.belongsTo(User);
module.exports = {
  db: sequelize,
  User,
  Todo,
};
