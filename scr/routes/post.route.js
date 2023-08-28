// importacion de controladores y funciones para validar
const routerPost = require('express').Router();
const { validatePost } = require('../models/validation');
const { validateSchema } = require('../middleware/schema');
const {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost
} = require('../controllers/post.controller');

//Operaciones basicas que permite obtener todos los posts, obtener un solo post
//crear, actualizar y eliminar los mismos.
routerPost.get('/api/obtenerPosts', obtenerPosts);
routerPost.get('/api/obtenerPost/:postId', obtenerPost);
routerPost.post('/api/crearPost', validatePost, validateSchema, crearPost);
routerPost.put('/api/actualizarPost/:postId', actualizarPost);
routerPost.delete('/api/eliminarPost/:postId', eliminarPost);

module.exports = routerPost;