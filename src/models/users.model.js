// instancia para la conexion de la bd
const db = require('../utils/database');
//tipos de datos sequeliza varchat (sql)_>stringn
const {DataTypes} = require('sequelize');

const Users =db.define('users', {
  id: {
    primaryKey:true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull:false,
    unique:true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail:true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,
  },
});

module.exports = Users;