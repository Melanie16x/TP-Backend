const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

//Conexion a la base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

const DBConexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('¡¡Se conectó la base de datos!!');
    } catch (error) {
        console.log('ERROR AL CONECTAR LA BASE DE DATOS: ', error);
    }
};

module.exports = { sequelize, DataTypes, DBConexion };