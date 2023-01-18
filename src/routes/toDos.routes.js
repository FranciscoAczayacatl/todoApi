const {Router} = require('express');
const { 
  getAllToDo, 
  getAllToDoById, 
  createToDo, 
  updateToDo, 
  deletedTodo, 
  getCategoriesWithTasks
} = require('../controllers/toDos.controler');
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/todos',authMiddleware, getAllToDo);
router.get('/todos/:id',authMiddleware, getAllToDoById);
router.get('/todos/:id/categories', authMiddleware, getCategoriesWithTasks);
router.post('/todos', authMiddleware, createToDo);
router.put('/todos/:id', authMiddleware, updateToDo);
router.delete('/todos/:id', authMiddleware, deletedTodo);

module.exports = router;
