//vamos a importar todos los modelos creados

const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');
const Todos_categories = require('./todos_categories.model');


const initModels = () => {

  //creamos las relasciones
  //hasOne ---->tiene uno
  //hasMany --->tiene muchos
  //belongsTo ---->pertenece a
  Todos.belongsTo(Users,{as:'author',foreignKey:'user_id'});
  Users.hasMany(Todos,{as:'task',foreignKey:'user_id'});
  
  // relacion M-M  categorias y tareas
  Todos_categories.belongsTo(Todos,{as:'task',foreignKey:'todo_id'});
  Todos.hasMany(Todos_categories,{as:'category',foreignKey:'todo_id'});

  Todos_categories.belongsTo(Categories,{as:'category',foreignKey:'category_id'});
  Categories.hasMany(Todos_categories,{as:'task',foreignKey:'category_id'});

}
module.exports = initModels;