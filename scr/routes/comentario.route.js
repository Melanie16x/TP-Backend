// importacion de controladores y funciones para validar
const routerComentario = require('express').Router();
const { validateComment } = require('../models/validation');
const { validateSchema } = require('../middleware/schema');
const {
    obtenerComentarios,
    crearComentario
} = require('../controllers/comentario.controller');

// Operaciones basicas que permiten obtener todos los comentarios y crear un comentario
routerComentario.get('/api/obtenerComentarios', obtenerComentarios);
routerComentario.post('/api/crearComentario', validateComment, validateSchema, crearComentario);

module.exports = routerComentario;