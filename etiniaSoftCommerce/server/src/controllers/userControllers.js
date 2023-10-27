const { User } = require("../db");
console.log(User);
const { Op } = require("sequelize");

const getAllUser = async () => {
  const usuariotDB = await User.findAll();
  console.log("lista de todos los usuarios");
  return usuariotDB;
};
const getUsuarById = async (id) => {
  const userDB = await User.findByPk(id);
  return userDB;
};
const getUserByName = async (name) => {
  const userDB = await User.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`, // Búsqueda de coincidencia parcial insensible a mayúsculas/minúsculas
      },
    },
  });
  if (userDB.length === 0) {
    return [{ message: "No se encontraron usuarios con la búsqueda." }];
  }

  return userDB;
};

const createusers = async (userData) => {
  try {
    const {
      id,
      name,
      last_name,
      phone_number,
      address,
      admin,
      employee,
      email,
      password,
    } = userData;

    const newuser = await User.create({
      id,
      name,
      last_name,
      phone_number,
      address,
      admin,
      employee,
      email,
      password,
    });

    return newuser;
  } catch (error) {
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const userToDelete = await User.findByPk(id);

    if (!userToDelete) {
      throw new Error(`usero con ID ${id} no encontrado.`);
    }

    await userToDelete.destroy();

    return `usero con ID ${id} eliminado exitosamente.`;
  } catch (error) {
    throw error;
  }
};
const updateUserById = async (id, newData) => {
    try {
      const userToUpdate = await User.findByPk(id);
  
      if (!userToUpdate) {
        throw new Error(`Usuario con ID ${id} no encontrado.`);
      }
  
      // Actualiza los campos del usuario con los nuevos datos
      await userToUpdate.update(newData);
  
      return userToUpdate;
    } catch (error) {
      throw error;
    }
  };
  

module.exports = {
  getAllUser,
  getUsuarById,
  getUserByName,
  createusers,
  deleteUserById,
  updateUserById
};
