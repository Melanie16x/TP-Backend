const { DataTypes, sequelize } = require('../../database');
const Comentario = require('./comentario.model');

// modelo de la tabla posts
const Post = sequelize.define('post', {
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcionPost: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    usuarioId: {
        type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'posts'
})

// Creacion de la tabla (si no está creada)
Post.sync({ force: false })
.then(() => {
    console.log('Tabla posts creada');
}).catch(err => {
    console.error('Error al crear tabla:', err);
});

// Relacion 1 a N entre las tablas post y comentario
Post.hasMany(Comentario, { as: 'postCometario', foreignKey: 'postId' });

module.exports = Post;