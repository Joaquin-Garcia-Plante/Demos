const { SUMAR_UNO, SUMAR_N } = require("../actions/actionsName");
function sumReducer(state = 0, action) {
  switch (action.type) {
    case SUMAR_UNO: {
      return state + 1;
    }
    case SUMAR_N: {
      return state + action.payload;
    }
    default:
      //Siempre el reducer debe contestar con un estado
      return state;
  }
}

module.exports = sumReducer;
