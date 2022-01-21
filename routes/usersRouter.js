const express = require("express");
const router = express.Router();
const {
  createUserController,
  deleteUserController,
  getUserByIdController,
  updateUserController,
  getUsersController,
} = require("../controllers/usersController");

router.get("/", getUsersController);
router.delete("/:id", deleteUserController);
router.post("/", createUserController);
router.put("/:id", updateUserController);
router.get("/:id", getUserByIdController);

module.exports = router;
