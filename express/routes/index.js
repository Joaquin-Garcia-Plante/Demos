//Aca voy a poder "enrutar" mis solicitudes

const { Router } = require("express");
const router = Router();
const users_router = require("./users");

//Para todas las rutas /users llame a mi metodo users_router
router.use("/users", users_router);
module.exports = router;
