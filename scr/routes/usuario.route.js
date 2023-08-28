// importacion de controladores y funciones para validar
const routerUsuario = require('express').Router();
const { body, validationResult } = require('express-validator');
const { validateUser } = require('../models/validation');
const { validateSchema } = require('../middleware/schema');
const {
    obtenerUsuarios,
    crearUsuario
} = require('../controllers/usuario.controller');

//Operaciones basicas que permite obtener todos los usuarios y crear un usuario
routerUsuario.get('/api/obtenerUsuarios', obtenerUsuarios);
routerUsuario.post('/api/crearUsuario', validateUser, validateSchema, crearUsuario);

module.exports = routerUsuario;