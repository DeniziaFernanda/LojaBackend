const createUserController = (req, res) => {
  const user = req.body;

  UserModel.create(user)
    .then((value) => {
      res.json({
        message: "User registered",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};

const deleteUserController = (req, res) => {
  const id = req.params.id;

  UserModel.deleteOne({ _id: id })
    .then((value) => {
      if (value.deletedCount === 0) {
        res.json({
          message: "User not founded",
        });
      } else {
        res.json({
          message: "User deleted",
        });
      }
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};

const getUsersController = (req, res) => {
  UserModel.find()
    .then((value) => {
      res.json({
        message: value,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};

const updateUserController = (req, res) => {
  const userId = req.params.id;
  const userBody = req.body;

  UserModel.findByIdAndUpdate(userId, { $set: userBody })
    .then((value) => {
      res.json({
        message: "User Updated",
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};

const getUserByIdController = (req, res) => {
  const id = req.params.id;
  const userBody = req.body;

  UserModel.findById(id)
    .then((value) => {
      res.json({
        message: value,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};
module.exports = { createUserController, deleteUserController, getUserByIdController, updateUserController, getUsersController };
