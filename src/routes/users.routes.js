const {Router} = require('express');
const {
  getAllUsers,
  getAllUserByID,
  createUser,
  updateUser,
  deletedUser,
  getUserByUsername, 
  getUserWithTasks,
  getCategories
} =require('../controllers/users.controler')
const router=Router();
const authMiddleware = require('../middlewares/auth.middleware');

//app.get
//app.post
//app.put
//app.delated

//controlador
router.get('/users',authMiddleware, getAllUsers);
router.get('/users/:id',authMiddleware, getAllUserByID);
router.get('/users/username/:username',authMiddleware, getUserByUsername);
router.get('/users/:id/todos',authMiddleware, getUserWithTasks);// obtener a un usuario con sus tareas
router.get('/users/:id/categories',authMiddleware, getCategories);
router.post('/users',createUser);
router.put('/users/:id',authMiddleware, updateUser);
router.delete('/users/:id',authMiddleware, deletedUser);


module.exports=router;