//importar express
const express =require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/users.routes');
const toDoRoutes = require('./routes/toDos.routes');
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');
require('dotenv').config();

console.log(process.env.PORT);

//crear una instacia de express

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT;

//probando la conexion a la base de datos

db.authenticate()
.then(() => console.log('autentifiacion existosa'))
.catch((error) => console.log(error));

initModels();
//vamo a utilizar el metodo sync de nuestra bd

db.sync({force: false})
.then(() => console.log('base de datos sincornizada'))
.catch((error) => console.log(error));

app.get('/',(req, res) => {
  res.status(200).json({message: 'bienvenido al servidor'});
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', toDoRoutes);
app.use('/api/v1', authRoutes);

app.listen(PORT,() => {
  console.log(`servidor corriendo en ${PORT}`);
});