//reducer se trae redux, trae sumreducer y count reducer
const redux = require("redux");
const sumReducer = require("./sumReducer");
const countReducer = require("./sumReducer");

//exporto los reducers combinados
module.exports = redux.combineReducers({
  suma: sumReducer,
  count: countReducer,
});
