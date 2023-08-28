const routerUsuario = require('express').Router();

const {
    obtenerUsuarios,
    crearUsuario
} = require('../controllers/usuario.controller')

// Obtener todas las reservas
routerUsuario.get('/api/obtenerUsuarios', obtenerUsuarios);
 
// Crear una reserva
routerUsuario.post('/api/crearUsuario', crearUsuario);

module.exports = routerUsuario;