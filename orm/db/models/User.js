//Este archivo va a tener el modelo de usuario

//importamos
const { Model, DataTypes } = require("sequelize");

//creamos la clase
class User extends Model {}

//init recibe dos parametros, por un lado los atributos y por otro lado la configuracion para ese modelo
//para la configuracion debemos pasarle la instancia de sequelize

//exportamos una funcion que inicializa la clase utilizando sequelize y retornamos la clase
module.exports = (sequelize) => {
  //inicializamos el modelo
  return User.init(
    {
      firstName: { type: DataTypes.STRING(40) },
      lastName: { type: DataTypes.STRING(40) },
      email: { type: DataTypes.STRING(40) },
      displayName: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.getDataValue("firstName")} ${this.getDataValue(
            "lastName"
          )}`.toUpperCase();
        },
      },
    },
    { sequelize, tableName: "user" }
  );
};

//
