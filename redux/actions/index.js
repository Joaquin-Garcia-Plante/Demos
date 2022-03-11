const { SUMAR_UNO, SUMAR_N } = require("./actionsName");

exports.sumarUno = function sumarUno() {
  return {
    type: SUMAR_UNO,
  };
};
//Esta action creator se encarga de sumar n cantidad al estado
exports.sumarN = function sumarN(num) {
  return {
    //Le paso mi action name por un lado
    type: SUMAR_N,
    //En la propiedad payload le paso la data (los numeros que quiero sumar)
    payload: num,
  };
};
