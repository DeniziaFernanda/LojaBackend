const {
    createProductHelper,
    deleteProductHelper,
    getProductsHelper,
    updateProductHelper,
    getProductByIdHelper,
  } = require("../helpers/models/productModelHelper");
  
  const createProductController = async (req, res) => {
    const product = req.body;
    try {
      await createProductHelper(product);
      res.json({
        message: "Product registered",
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
  
  const deleteProductController = async (req, res) => {
    const id = req.params.id;
  
    try {
      const value = await deleteProductHelper(id);
      if (value.deletedCount === 0) {
        res.json({
          message: "Product not founded",
        });
      } else {
        res.json({
          message: "Product deleted",
        });
      }
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
  
  const getProductsController = async (req, res) => {
    try {
      const value = await getProductsHelper();
      res.json({
        message: value,
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
  
  const updateProductController = async (req, res) => {
    const productId = req.params.id;
    const productBody = req.body;
  
    try {
      await updateProductHelper(productId, productBody);
      res.json({
        message: "Product Updated",
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
  
  const getProductByIdController = async (req, res) => {
    const id = req.params.id;
  
    try {
      const value = await getProductByIdHelper(id);
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
    createProductController,
    deleteProductController,
    getProductByIdController,
    updateProductController,
    getProductsController,
  };
  