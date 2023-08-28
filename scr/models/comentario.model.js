const { DataTypes, sequelize } = require('../../database');

// modelo de la tabla comentarios
const Comentario = sequelize.define('comentario', {
    comentarioId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionComentario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    postId: {
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
    tableName: 'comentarios'
})

Comentario.sync({ force: false })
.then(() => {
    console.log('Tabla cometarios creada');
}).catch(err => {
    console.error('Error al crear tabla:', err);
});

module.exports = Comentario;