const { UserModel } = require("../../models/userModel");

const createUserHelper = async (userBody) => {
  try {
    await UserModel.create(userBody);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUserHelper = async (id) => {
  try {
   return await UserModel.deleteOne({ _id: id });
  } catch (error) {
    throw new Error(error);
  }
};

const getUsersHelper = async () => {
  try {
    return await UserModel.find();
  } catch (error) {
    throw new Error(error);
  }
};
const updateUserHelper = async (userId, userBody) => {
  try {
    await UserModel.findByIdAndUpdate(userId, { $set: userBody });
  } catch (error) {
    throw new Error(error);
  }
};

const getUserByIdHelper = async (userId) => {
  try {
    return await UserModel.findById(userId);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUserHelper,
  deleteUserHelper,
  getUsersHelper,
  updateUserHelper,
  getUserByIdHelper,
};
