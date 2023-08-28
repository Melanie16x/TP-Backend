const routerPost = require('express').Router();

const {
    obtenerPosts,
    obtenerPost,
    crearPost,
    actualizarPost,
    eliminarPost
} = require('../controllers/post.controller');

routerPost.get('/api/obtenerPosts', obtenerPosts);

routerPost.get('/api/obtenerPost/:postId', obtenerPost);
 
routerPost.post('/api/crearPost', crearPost);
 
routerPost.put('/api/actualizarPost/:postId', actualizarPost);

routerPost.delete('/api/eliminarPost/:postId', eliminarPost);

module.exports = routerPost;