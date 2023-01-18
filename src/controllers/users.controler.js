const UserServices = require('../services/user.service');

const getAllUsers = async(req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllUserByID = async(req, res) => {
 try {
  const {id} = req.params;
  const result = await UserServices.getById(id);
  res.status(200).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const getUserByUsername = async(req, res) => {
  try {
    const {username} = req.params;
    const result = await UserServices.getUsername(username);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getCategories = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getwithCategories(id);
    res.json({
      message: 'enviando usuarios con sus categorias',
        data:result,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const createUser = async(req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async(req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await UserServices.userUpdate(id, field)
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deletedUser = (req, res) => {
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
  res.json({message: 'eliminando los usuario'})
};

const getUserWithTasks = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await UserServices.getWithTasks(id);
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllUsers,
  getAllUserByID,
  getUserByUsername,
  createUser,
  updateUser,
  deletedUser,
  getUserWithTasks,
  getCategories,
}