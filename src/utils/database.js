const {Sequelize}=require('sequelize');
require('dotenv').config();

//crear un ainstancia con parametros de configuracion de nuesta base de datos
//nesesitamos un objeto de configuracion ---> credenciales de la bd
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  logging: false,
});

module.exports=db;