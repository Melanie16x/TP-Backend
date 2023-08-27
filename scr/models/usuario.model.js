const { DataTypes, sequelize } = require('../../database');
const Post = require('./post.model');

const Usuario = sequelize.define('usuario', {
    usuarioId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    constraseña: {
        type: DataTypes.STRING(30),
        allowNull: false
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
    tableName: 'usuarios'
})

Usuario.sync({ force: false })
.then(() => {
    console.log('Tabla usuarios creada');
}).catch(err => {
    console.error('Error al crear tabla:', err);
});

Usuario.hasMany(Post, { as: 'usuarioPost', foreignKey: 'usuarioId' });

module.exports = Usuario;