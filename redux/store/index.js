//store llama a redux y llama al reducer
const redux = require("redux");
const reducer = require("../reducers/index");
//Crea la store con redux y el reducer
const store = redux.createStore(reducer);

module.exports = store;
