const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');

class UserServices {

  static async getAll(){
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id){
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUsername(username){
    try {
      const result = await Users.findOne({where: {username}});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithTasks(id){
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: ['username'],
        include: {
          model: Todos,
          as:'task',
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getwithCategories(id) {
    try {
      const result = await Users.findOne({
        where:{id},
        attributes: ['username'],
        include:{
          model: Categories,
          as: 'author',  
          attributes:['id','name'],
        }
      });
      return result
    } catch (error) {
      throw error
    }
  }

  static async create(user){
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }


  static async userUpdate(id, field){
    try {
      const result = await Users.update(field, {
        where: {id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  }

module.exports = UserServices;