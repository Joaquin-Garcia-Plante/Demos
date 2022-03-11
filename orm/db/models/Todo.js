//Este archivo va a tener el modelo de usuario

//importamos
const { Model, DataTypes } = require("sequelize");

//creamos la clase
class Todo extends Model {}

//init recibe dos parametros, por un lado los atributos y por otro lado la configuracion para ese modelo
//para la configuracion debemos pasarle la instancia de sequelize

//exportamos una funcion que inicializa la clase utilizando sequelize y retornamos la clase
module.exports = (sequelize) => {
  //inicializamos el modelo
  return Todo.init(
    {
      title: { type: DataTypes.STRING(60) },
      description: { type: DataTypes.TEXT },
      complete: { type: DataTypes.BOOLEAN },
    },
    { sequelize, tableName: "todos" }
  );
};
