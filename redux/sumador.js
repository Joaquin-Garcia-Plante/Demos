const store = require("./store/index");
const { sumarUno, sumarN } = require("./actions/index");
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(sumarUno());
store.dispatch(sumarUno());
store.dispatch(sumarN(25));

//!Explicacion sin modularizar
//importo redux
// const redux = require("redux");

// //!Actions Name
// //esto sirve para utilizar una constante y no el valor en si
// const SUMAR_UNO = "SUMAR_UNO";
// const SUMAR_N = "SUMAR_N";

// //si no tenemos un estado inicial NECESITAMOS crear uno

// const initialState = {
//   suma: 0,
//   count: 0,
// };

// //!Creando mi accion
// //las acciones siempre son objetos
// //tienen una propiedad type que nos indica que tipo de evento queremos ejecutar

// function sumarUno() {
//   return {
//     type: SUMAR_UNO,
//   };
// }
// //Esta action creator se encarga de sumar n cantidad al estado
// function sumarN(num) {
//   return {
//     //Le paso mi action name por un lado
//     type: SUMAR_N,
//     //En la propiedad payload le paso la data (los numeros que quiero sumar)
//     payload: num,
//   };
// }

// //para poder usar esta accion debemos crear un caso de uso en el switch

// function sumReducer(state = 0, action) {
//   switch (action.type) {
//     case SUMAR_UNO: {
//       return state + 1;
//     }
//     case SUMAR_N: {
//       return state + action.payload;
//     }
//     default:
//       //Siempre el reducer debe contestar con un estado
//       return state;
//   }
// }
// function countReducer(state = 0, action) {
//   switch (action.type) {
//     default:
//       //Siempre el reducer debe contestar con un estado
//       return state;
//   }
// }

// // como convino los dos reducer?
// //De esta forma creo dos reducers para cada "sub estado"
// const reducer = redux.combineReducers({
//   suma: sumReducer,
//   count: countReducer,
// });

// //Creo mi store
// //Mi store es el eje fundamental en redux
// //createStore recibe como argumento un reducer
// //reducer es una funcion
// //reducer requiere dos argumentos
// //primer argumento: estado
// //segundo argumento: accion(son las encargas de avisarle a redux que haga un cambio)
// //devuelve un estado

// const store = redux.createStore(reducer);

// //Como ordenamos que se ejecute la accion?
// //store tiene un metodo llamado dispatch
// //haciendo esto al dispatch le paso el objeto con la accion
// //el dispatch despacha la acion al store

// //!Funcion de subscripcion
// //ejecuta un fragmento de codigo siempre que exista algun cambio en la store

// store.subscribe(() => {
//   //Cada vez que exista un cambio que se despacha, se va a ejecutar el subscribe
//   //Cuando algo cambie en el store se va a ejecutar
//   console.log(store.getState());
// });

// // console.log(store);
// //! Como obetener el estado
// // console.log(store.getState());

// store.dispatch(sumarUno());

// // console.log(store.getState());
// store.dispatch(sumarUno());
// // console.log(store.getState());

// store.dispatch(sumarN(25));
