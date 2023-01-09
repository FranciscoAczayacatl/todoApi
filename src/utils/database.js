const {Sequelize}=require('sequelize');

//crear un ainstancia con parametros de configuracion de nuesta base de datos
//nesesitamos un objeto de configuracion ---> credenciales de la bd
const db = new Sequelize({
  database: 'todoapplication',
  username: 'postgres',
  host: '127.0.0.1',
  port: '5432',
  password: 'root',
  dialect: 'postgres'
});

module.exports=db;