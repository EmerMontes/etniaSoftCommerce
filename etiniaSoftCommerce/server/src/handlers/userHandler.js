const {
  registerUser,
  getAllUser,
  getUsuarById,
  getUserByName,
  createusers,
  deleteUserById,
  updateUserById,
  loginUser,
  confirmEmailControll
} = require("../controllers/userControllers");

const confirmEmail = async (req, res) => {
  
  try {
    const response = await confirmEmailControll(req, res);
    res.status(200);
  } catch (error) {
    console.log(error);
    //res.status(400).json({ error: error.message });
  }
};
const postUsersRegsiter = async (req, res) => {
  try {
    const response = await registerUser(req, res);
    res.status(200).json({ message: "Registro exitoso" });
  } catch (error) {
    console.log(error.message);
    console.log("Error atrapado en el handler");
    res.status(400).json({ error: error.message });
  }
};


const getUsersByName = async (req, res) => {
  const name = req.params.name;
  try {
    const response = await getUserByName(name);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getUsersHandler = async (req, res) => {
  try {
    const response = await getAllUser();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getIdHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await getUsuarById(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUsersHandler = async (req, res) => {
  try {
    const user = await createusers(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteUserHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await deleteUserById(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateUserHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await updateUserById(id, req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const loginUserHandler = async (req, res) => {
  try {
    const token = await loginUser(req, res);
    // loginUser ya se encarga de enviar la respuesta, por lo que no es necesario enviarla de nuevo aquí
  } catch (error) {
    // Si ocurriera un error inesperado, podrías manejarlo aquí
    res.status(500).json({ error: 'Internal server error' });
  }
};
;

// /:id = params si modifica
// query === ? name&raza, no modifica la ruta

module.exports = {
  getUsersHandler: getUsersHandler,
  getIdHandler: getIdHandler,
  getUsersByName: getUsersByName,
  createUsersHandler: createUsersHandler,
  deleteUserHandler: deleteUserHandler,
  updateUserHandler: updateUserHandler,
  loginUserHandler: loginUserHandler,
  postUsersRegsiter:postUsersRegsiter,
  confirmEmail:confirmEmail
};
