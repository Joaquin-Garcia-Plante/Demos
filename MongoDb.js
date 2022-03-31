//Crear un documento
//Documentos --> objetos del tipo json

user1 = {
  username: "user1",
  age: 22,
  email: "user1@gmail.com",
};
user2 = {
  username: "user2",
  age: 21,
  email: "user2@gmail.com",
};
user3 = {
  username: "user3",
  age: 21,
  email: "user3@gmail.com",
};

//Hasta ahora creamos un documento
//Vamos a insertarlo en nuestra coleccion
//Sintaxis: objetoDB.collectionName.insert(documento)

//Proceso interno
//Se valida que la base de datos exista (el objeto db) si no existe se procede a crearlo
//Se valida que la coleccion exista y si no existe se procede a crearlo
//Solo cuando se validen los dos pasos anteriores, se procede a insertar el documento

db.users.insert(user3);

//objectID -> 4 secciones
// 1- (timestamps)
// 2- (identificador para nuestro servidor)
// 3- (ProcessID)
// 4- (AutoIncrement)
// De esta forma evita que no se repita

//! Insertar documentos de otras maneras

//* insertOne()
//Este metodo nos permite insertar uno solo
user4 = {
  username: "user4",
  age: 21,
  email: "user4@gmail.com",
};
db.users.insertOne(user4);

//* insertMany()
//Este metodo nos permite insertar multiples documentos

db.users.insertMany([
  {
    username: "user5",
    age: 22,
    email: "user5@gmail.com",
  },
  {
    username: "user6",
    age: 21,
    email: "user5@gmail.com",
  },
  {
    username: "user7",
    age: 21,
    email: "user5@gmail.com",
  },
]);

//Nos va a devolver un listado de los id de cada documento que se inserto

//* Metodo save()
//Si el documento no existe se crea
//Si el documento existe se actualiza

user8 = {
  username: "user8",
  age: 21,
  email: "user8@gmail.com",
};
db.users.save(user8);

//!Obtener documentos a partir de consultas

//Agregamos mas registros para empezar con un atributo extra
db.users.insertMany([
  {
    username: "user13",
    age: 22,
    email: "user13@gmail.com",
    status: "inactive",
  },
  {
    username: "user14",
    age: 24,
    email: "user14@gmail.com",
    status: "inactive",
  },
  {
    username: "user15",
    age: 28,
    email: "user15@gmail.com",
    status: "inactive",
  },
  {
    username: "user16",
    age: 26,
    email: "user16@gmail.com",
    status: "active",
  },
]);

//Obtener el usuario con "user7"
//Sintaxis: db.collectionName.find({condiciones})

db.users.find({ username: "user7" }); //Retorna un cursor
//Este siguiente nos devuelve un solo documento
db.users.findOne({ username: "user7" }); //Retorna un documento

//Operador relacional
//!operadores
//*gt (>)
//*gte (>=)
//*lt (<)
//*lte (<=)
//Obtener los usuarios que tienen edad mayor a 21
db.users.find({
  age: { $gt: 21 },
});
//Nos va a devolver todos los documentos de user que tengan edad mayor a 21

//!operadores
//*gt (>)
//*gte (>=)
//*lt (<)
//*lte (<=)
//*ne !=
//*exists (para saber si existe)
//Los objetos de tipo cursor tienen el metodo .count() que nos permite contar
db.users
  .find({
    age: { $gt: 21 },
  })
  .count();

//En este caso nos devuelve la cantidad de documentos que tienen edad mayor a 21

//Obtener usuarios que tengan edad mayor a 25 y su status sea activo
db.users.find({
  $and: [{ age: { $gt: 20 } }, { status: "active" }],
});

//Obtener todos los documentos cuya edad no sea 21
db.users.find({
  age: { $ne: 21 },
});

//Obtener los documentos que tengan como edad 21 o 22
//El operador or ($or)
db.users.find({
  $or: [{ age: 21 }, { age: 22 }],
});

//El operador in ($in)
db.users.find({
  age: { $in: [22, 21] },
});

//Obtener todos los usuarios con el atributo status
db.users.find({
  status: { $exists: false },
});

//Obtener todos los usuarios con status activo
db.users.find({
  status: "active", // ==
});

db.users.find({
  $and: [{ status: { $exists: true } }, { status: "active" }],
});

//Obtener los usuarios con status activo y correo electronico
db.users.find({
  $and: [
    { status: { $exists: true } },
    { status: "active" },
    { email: { $exists: true } },
  ],
});

//Obtener el usuario con mayor edad
//El metodo find siempre retorna un objeto cursor
//El objeto cursor tiene el metodo sort que nos permite ordenar
//Si queremos obtener solo uno, podemos poner limit para que nos devuelva uno solo
//Sort tambien nos devuelve un objeto cursar
db.users
  .find()
  .sort({
    //Como queremos ordenar
    age: -1,
  })
  .limit(1);

//Obtener a los tres usuarios mas jovenes
db.users.find().sort({ age: 1 }).limit(3);

//!Expresiones regulares

//Validar todos los usuarios que tengan email terminado en .com
//Se pueden utilizar expresiones regulares
//Seria el equivalente a un like
db.users.find({
  email: /.com$/,
});

//Obtener todos los usuarios cuyo correo electronico comience con user
db.users.find({
  email: /^user1/,
});

//Conocer si un caracter se encuentra dentro de un string
//Nos va a devolver todos los documentos que en el correo tenga un arroba
db.users.find({
  email: /@/,
});

//!Proyecciones
//En el segundo argumento del find se ponen los atributos que queremos obtener
db.users.find(
  {},
  {
    _id: false,
    username: true,
    email: true,
  }
);

//!Actualizacion de documentos

//*1-Save
var user = db.users.findOne(); //Obtengo el documento
//Modifico los atributos
user.age = 90;
user.email = "user1@test.es";
user.status = "active";
//Save
db.users.save(user);

//*2-Update
//El metodo recibe dos argumentos y un tercero opcional
//Primer argumento: Condiciones para poder actualizar (matcheo)
//Segundo argumento: Cambios
//Tercer argumento: Sirve para actualizar multiples documentos

db.users.update(
  {
    _id: ObjectId("624243a00e7420db29ae41c5"),
  },
  {
    $set: {
      username: "AsapYoa",
      email: "AsapYoa@gmail.com",
    },
  }
);

//Eliminar algun atributo
db.users.update(
  {
    _id: ObjectId("6241fade0f882716c1f3fc5f"),
  },
  {
    $unset: {
      status: true,
    },
  }
);

//Modificando mas de un documento a la vez
db.users.update(
  {
    status: "inactive",
  },
  {
    $set: {
      status: "active",
    },
  },
  {
    multi: true,
  }
);

//*updateOne
//Actualiza un documento solo
db.users.updateOne({ username: "user7" }, { $set: { status: "inactive" } });

//*updateMany
//Actualiza mas de un documento
db.users.updateMany(
  { email: { $exists: true } },
  { $set: { bio: "añade tu bio" } }
);

//Actualizar atributos que contengan un numero entero
//*inc indica que vamos a incrementar el valor de un atributo
db.users.updateMany({}, { $inc: { age: 1 } });

//!Eliminar documentos
//*remove
//Recibe como argumento un documento con las condiciones que el documento debe incumplir para eliminar el documento
db.users.remove({ status: "inactive" });

db.users.find({}, { username: true, status: true });

//!Documentos anidados/complejos
userPro = {
  username: "userPro",
  age: 21,
  email: "userPro@gmail.com",
  address: {
    zip: 2025,
    country: "Argentina",
  },
  courses: ["Javascript", "ReactJS", "Redux", "MongoDB"],
  comments: [
    {
      body: "Comment",
      like: true,
      tags: ["MongoDB"],
    },
    {
      body: "Excelente",
      like: true,
    },
  ],
};

db.users.insert(userPro);

//Obtener usuarios que radiquen en mexico
//Busqueda de atributos sobre documentos anidados
db.users
  .find({
    "address.country": "Argentina",
  })
  .pretty();

//! $elemMatch
//Nos permite filtrar sobre atributos que se encuentran dentro de un listado
//Nos sirve para filtrar atributos que se encuentren dentro de documentos que se encuentren dentro de un listado
//Sintaxis:
db.users.find({
  comments: {
    $elemMatch: {
      //Filtrado que querramos hacer
    },
  },
});

//! $push
//Nos permite añadir un nuevo elemento a un listado
db.users.updateOne(
  {
    username: "user13",
  },
  {
    $push: {
      //Atributo sobre el cual quiero añadir el elemento
      comments: {
        //Atributos
      },
    },
  }
);

//! Añadir un elemeento sobre un listado que se encuentra en un documento que a su vez se encuentra dentro de otro listado

db.users.updateOne(
  {
    username: "user13",
  },
  {
    $push: {
      "list.positionDocument.list": "body",
    },
  }
);
