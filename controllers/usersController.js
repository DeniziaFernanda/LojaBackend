const {
  createUserHelper,
  deleteUserHelper,
  getUsersHelper,
  updateUserHelper,
  getUserByIdHelper,
} = require("../helpers/models/userModelHelper");

const createUserController = async (req, res) => {
  const user = req.body;
  try {
    await createUserHelper(user);
    res.json({
      message: "User registered",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteUserController = async (req, res) => {
  const id = req.params.id;

  try {
    await deleteUserHelper(id);
    if (value.deletedCount === 0) {
      res.json({
        message: "User not founded",
      });
    } else {
      res.json({
        message: "User deleted",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getUsersController = async (req, res) => {
  try {
    await getUsersHelper();
    res.json({
      message: value,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const updateUserController = async (req, res) => {
  const userId = req.params.id;
  const userBody = req.body;

  try {
    await updateUserHelper(userId, userBody);
    res.json({
      message: "User Updated",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getUserByIdController = async (req, res) => {
  const id = req.params.id;

  try {
    await getUserByIdHelper(id);
    res.json({
      message: value,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  createUserController,
  deleteUserController,
  getUserByIdController,
  updateUserController,
  getUsersController,
};
