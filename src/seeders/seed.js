const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const db = require('../utils/database');
const Categories = require('../models/categories.model');
const Todoscategories = require('../models/todos_categories.model');

const users = [
  {
    username: 'francisco',
    email: 'francico@ht.com',
    password: '1234'
  },
  {
    username: 'lorena',
    email: 'lorena@ht.com',
    password: '1234'
  },
  {
    username: 'gamuza',
    email: 'gamu@ht.com',
    password: '1234'
  }
];

const todos = [
  {
    title: 'estudiar node',
    description: 'shalala', 
    userId: 1,
  },
  {
    title:'pasear el perro',
    userId: 1,
  },
  {
    title:'lavar los platos',
    description:'shalala 2', 
    userId: 2,
  },
  {
    title:'ir al chequeo mensual', 
    description:'lalala', 
    userId: 3,
  }
];

const categories=[
  {
    name:'personal',
    userId:1,
  },
  {
    name:'educacion',
    userId:1
  },
  {
    name:'salud',
    userId:2
  },
  {
    name:'trabajo',
    userId:2
  },
  {
    name:'hogar',
    userId:3,
  },
  {
    name:'cocina',
    userId:3,
  },
  {
    name:'deporte',
    userId:1
  },
  {
    name:'ocio',
    userId:2
  },
  {
    name:'financiero',
    userId:3
  },
  {
    name:'entretenimineto',
    userId:1
  },
];

 const todosCategories=[
  {
    categoryId:  1,
    todoId:1,
  },
  {
    categoryId:  2,
    todoId:1,
  },
  {
    categoryId:  4,
    todoId:1,
  },
  {
    categoryId:  1,
    todoId:2,
  },
  {
    categoryId:  7,
    todoId:2,
  },
  {
    categoryId:  10,
    todoId:2,
  },
  {
    categoryId:  3,
    todoId:2,
  },
  {
    categoryId:  5,
    todoId:3,
  },
  {
    categoryId:  6,
    todoId:3,
  },
  {
    categoryId:  1,
    todoId:4,
  },
  {
    categoryId:  3,
    todoId:4,
  }
 ];

db.sync({force: true})
.then(() => {
  console.log('iniciando con el sembrario malicioso');
  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    todos.forEach((todo) => Todos.create(todo));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    todosCategories.forEach((tc) => Todoscategories.create(tc));
  }, 400);
})
.catch(error => console.log(error))