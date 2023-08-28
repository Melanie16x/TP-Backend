const routerComentario = require('express').Router();

const {
    obtenerComentarios,
    crearComentario
} = require('../controllers/comentario.controller')

// Obtener todas las reservas
routerComentario.get('/api/obtenerComentarios', obtenerComentarios);
 
// Crear una reserva
routerComentario.post('/api/crearComentario', crearComentario);

module.exports = routerComentario;