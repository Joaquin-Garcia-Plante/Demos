//En este archivo voy a contener todos los metodos que yo necesite para trabajar con las rutas

const { Router } = require("express");
const router = Router();
const { users, users_id } = require("../controllers/users");

router.get("/", users);
//Esta ruta nos va a permitir leer un id que nos llegue por parametro
router.get("/:id", users_id);

module.exports = router;
