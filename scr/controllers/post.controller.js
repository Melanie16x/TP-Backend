const Post = require('../models/post.model');
const ctrlPost = {};

// Obtener todos los posts
ctrlPost.obtenerPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: {
                estado: true
            }
        });

        return res.json(posts);
    } catch (error) {
        console.log('Error al obtener posts', error);
        return res.status(500).json({
            message:'Hubo un problema para traer los posts'
        })
    }
}

// Obtener un post
ctrlPost.obtenerPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findByPk(postId);
        return res.json(post);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Hubo un problema para traer el post"
        })
    }
}

// Crear un post
ctrlPost.crearPost = async (req, res) => {
    const {
        titulo,
        descripcionPost,
        usuarioId
    } = req.body;

    try {
        const nuevoPost = new Post({
            titulo,
            descripcionPost,
            usuarioId
        });

        await nuevoPost.save();

        return res.status(201).json({
            message : 'El post fue creado correctamente.'
        });
    } catch (error) {
        console.log('Error al crear post', error);
        return res.status(500).json({
            message: "Hubo un problema para guardar la informacion del post."
        })
    }
}

// Actualizar un post
ctrlPost.actualizarPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findByPk(postId);
        await post.update(req.body)
        return res.json({
            message:'Post actualizado con exito'
        });
    } catch (error) {
        console.log('Error al actualizar post', error);
        return res.status(500).json({
            message :"Hubo un problema para actualizar el post",
        })
    }
}

// Eliminar de forma logica un post
ctrlPost.eliminarPost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findByPk(postId);
        await post.update({ estado: false });
        return res.json({
            message:"se eliminó el post"
        });
    } catch (error) {
        console.log('Error al eliminar el post', error);
        return res.status(500).json({
            message:"Hubo un problema para eliminar el post"
        })
    }
}

module.exports = ctrlPost;