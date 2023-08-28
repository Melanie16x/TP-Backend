// rutas para la utilizacion de los controladores y validacion
const routerUsuario = require('express').Router();
const { body, validationResult } = require('express-validator');
const { validateUser } = require('../models/validation');
const { validateSchema } = require('../middleware/schema');
const {
    obtenerUsuarios,
    crearUsuario
} = require('../controllers/usuario.controller');

routerUsuario.get('/api/obtenerUsuarios', obtenerUsuarios);
routerUsuario.post('/api/crearUsuario', validateUser, validateSchema, crearUsuario);

module.exports = routerUsuario;