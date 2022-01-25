const express = require("express");
const router = express.Router();
const {
  createProductController,
  deleteProductController,
  getProductByIdController,
  updateProductController,
  getProductsController,
} = require("../controllers/productsController");

router.get("/", getProductsController);
router.delete("/:id", deleteProductController);
router.post("/", createProductController);
router.put("/:id", updateProductController);
router.get("/:id", getProductByIdController);

module.exports = router;
