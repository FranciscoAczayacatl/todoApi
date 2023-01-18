const ToDoServices = require('../services/toDos.service')

const getAllToDo = async(req, res) => {
  try {
    const result = await ToDoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllToDoById = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await ToDoServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCategoriesWithTasks = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await ToDoServices.getCategories(id);
    res.json(
      {
        message: 'enviando tareas con categorias',
        data:result,
      }

    );
  } catch (error) {
    res.status(400).json({
      error: error.messages,
      datails : error.stack,
    });
  }
} 

const createToDo = async(req, res) => {
  try {
    const newToDo = req.body;
    const result = await ToDoServices.create(newToDo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateToDo = async(req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await ToDoServices.toDoUpdate(id, field);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deletedTodo = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await ToDoServices.deleted(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllToDo,
  getAllToDoById,
  createToDo,
  updateToDo,
  deletedTodo,
  getCategoriesWithTasks
}


