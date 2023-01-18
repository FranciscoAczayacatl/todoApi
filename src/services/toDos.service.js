const Todos = require('../models/todos.model');
const TodosCategories = require('../models/todos_categories.model');
const category = require('../models/categories.model');

class ToDoServices {

  static async getAll() {
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCategories(id) {
    try {
      const result = await Todos.findOne({
        where:{id},
        include:{
          model: TodosCategories,
          as: 'categories',
          attributes:['id'],
          include:{
            model: category,
            as: 'category',
          
          }
        }
      });
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(user) {
    try {
      const result = await Todos.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async toDoUpdate(id, field) {
    try {
      const result = await Todos.update(field, {
        where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleted(id) {
    try {
      const result = await Todos.destroy({
        where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ToDoServices;