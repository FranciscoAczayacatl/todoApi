//importar express
const express =require('express');
const db = require('./utils/database');
const  initModels = require('./models/init.models');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');

//crear una instacia de express

const app = express();

app.use(express.json());

const PORT=8000;

//probando la conexion a la base de datos

db.authenticate()
.then(() => console.log('autentifiacion existosa'))
.catch((error) => console.log(error));

initModels();
//vamo a utilizar el metodo sync de nuestra bd

db.sync({force: false})
.then(() => console.log('base de datos sincornizada'))
.catch((error) => console.log(error))


app.get('/',(req, res) => {
  res.status(200).json({message:'bienvenido al servidor'});
});

//definir las  rutas de nuestro enpoins (de ahora adelante ep)
//todas las consultas de ususarios
//localhost:8000/users
//localhost:8000/todos 

//get a users

app.get('/users', async (req, res)=>{
  try {
    //vamos a  obtener el resultado de consultar a todos los ususarios
    const result = await Users.findAll();//SELECT * FROM
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});


//Obtenr un usuario sabiendo su id

app.get('/users/:id', async(req,res) => {
 try {
  const {id} = req.params;
  const result = await Users.findByPk(id);
  res.status(200).json(result);
 } catch (error) {
  console.log(error);
 }
});


//obtener un usuario por su username
app.get('/users/username/:username', async(req, res) => {
 try {
  const {username}=req.params;
  const result = await Users.findOne({ where: {username}});
  res.status(200).json(result);
 } catch (error) {
  console.log(error);
 }
});

//creando un usuario
app.post('/users', async(req, res) => {
  try {
    const user=req.body;
    const result=await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

//actualizar un ususario, solo podemos cambiar password

app.put('/users/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await Users.update(field,{
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});



//eliinar un usuario
// app.delete('/users/:id', async(req, res)=>{
//   try {
//     const {id}=req.params;
//     const result=await Users.destroy({
//       where:{id}
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//   }
// })

//obteniendo todos
app.get('/todos', async(req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obteniendo todos por id
app.get('/todos/:id', async(req, res)=>{
  try {
    const {id} = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//creando todo
app.post('/todos', async(req, res) => {
  try {
    const todo = req.body;
    const result = await Todos.create(todo);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

//actualizar tarea solo podemos cambiar el status de la tarea
app.put('/todos/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await Todos.update(field, {
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//eliminar un todo por id
app.delete('/todos/:id', async(req, res)=>{
   try {
     const {id}=req.params;
     const result=await Todos.destroy({
       where:{id}
     });
     res.status(200).json(result);
   } catch (error) {
     console.log(error);
   }
 });



app.listen(PORT,()=>{
  console.log(`servidor corriendo en ${PORT}`);
});

//vamos a terminar los modelos
//crear relaciones entre los modelos

//insertar informacion desde esta proyecto
//consultar la inforacon con endpoinst


