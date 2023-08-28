const Comentario = require('../models/comentario.model');
const ctrlComentario = {};

ctrlComentario.obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll({
            where: {
                estado: true
            }
        });

        return res.json(comentarios);
    } catch (error) {
        console.log('Error al obtener los comentarios', error);
        return res.status(500).json({
            message: 'Error al obtener los comentarios'
        })
    }
}

ctrlComentario.crearComentario = async (req, res) => {
    const {
        descripcionComentario,
        postId
    } = req.body;

    try {
        const nuevoComentario = new Comentario({
            descripcionComentario,
            postId
        });

        await nuevoComentario.save();

        return res.status(201).json({ message: '!!Comentario creado!!'})
    } catch (error) {
        console.log('Error al crear el comentario', error);
        return res.status(500).json({ message: 'error al crear el comentario'})
    }
}

module.exports = ctrlComentario;