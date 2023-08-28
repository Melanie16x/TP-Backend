const Usuario = require('../models/usuario.model');
const ctrlUsuario = {};

// Obtener todas las reservas
ctrlUsuario.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            where: {
                estado: true
            }
        });

        return res.json(usuarios);
    } catch (error) {
        console.log('Error al obtener a los usuarios', error);
        return res.status(500).json({
            message: 'Error al obtener a los usuarios'
        })
    }
}

// Crear una reserva
ctrlUsuario.crearUsuario = async (req, res) => {
    const {
        nombre,
        apellido,
        email,
        contraseña
    } = req.body;

    try {
        const nuevoUsuario = new Usuario({
            nombre,
            apellido,
            email,
            contraseña
        });

        await nuevoUsuario.save();

        return res.status(201).json({ message: '!!Usuario creado!!'})
    } catch (error) {
        console.log('Error al crear al usuario', error);
        return res.status(500).json({ message: 'error al crear al usuario'})
    }
}

module.exports = ctrlUsuario;