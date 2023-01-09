const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const db = require('../utils/database');

const users = [
  {
    username:'francisco',
    email:'francico@ht.com',
    password:'1234'
  },
  {
    username:'lorena',
    email:'lorena@ht.com',
    password:'1234'
  },
  {
    username:'gamuza',
    email:'gamu@ht.com',
    password:'1234'
  }
];

const todos=[
  {
    title:'tarea 1', description:'shalala', userId: 1,
  },
  {
    title:'tarea imposible', userId: 1,
  },
  {
    title:'tarea 2', description:'shalala 2', userId: 2,
  },
  {
    title:'dormir', description:'sputo', userId: 3,
  }
];

// const categories=[];

// const todosCategories=[];

db.sync({force:true})
.then(()=>{
  console.log('iniciando con el sembrario malicioso');
  users.forEach((user)=>Users.create(user));
  setTimeout(()=>{
    todos.forEach((todo)=>Todos.create(todo));
  },100);
})
.catch(error=>console.log(error))