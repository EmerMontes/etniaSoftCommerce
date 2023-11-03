const { User } = require("../db");
console.log(User);
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

      name,
      last_name,
      phone_number,
      address,
      admin,
      employee,
      email,
      password,
    } = userData;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = await User.create({
  
      name,
      last_name,
      phone_number,
      address,
      admin,
      employee,
      email,
      password: hashedPassword,
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

const loginUser = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Correo electrónico o contraseña inválidos" });
    }
    // Debes implementar la comparación segura de contraseñas aquí
    if (password === user.dataValues.password) {
      // La contraseña proporcionada coincide con la contraseña almacenada en la base de datos
      const token = jwt.sign({ userId: user.dataValues.id }, "your_jwt_secret"); // Reemplaza 'your_jwt_secret' por tu clave JWT real
      res.json({ token });
    } else {
      // Las contraseñas no coinciden
      return res
        .status(400)
        .json({ error: "Correo electrónico o contraseña inválidos" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllUser,
  getUsuarById,
  getUserByName,
  createusers,
  deleteUserById,
  updateUserById,
  loginUser,
};
