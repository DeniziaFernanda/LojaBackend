const { ProductModel } = require("../../models/productModel");

const createProductHelper = async (productBody) => {
  try {
    await ProductModel.create(productBody);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteProductHelper = async (id) => {
  try {
   return await ProductModel.deleteOne({ _id: id });
  } catch (error) {
    throw new Error(error);
  }
};

const getProductsHelper = async () => {
  try {
    return await ProductModel.find();
  } catch (error) {
    throw new Error(error);
  }
};
const updateProductHelper = async (productId, productBody) => {
  try {
    await ProductModel.findByIdAndUpdate(productId, { $set: productBody });
  } catch (error) {
    throw new Error(error);
  }
};

const getProductByIdHelper = async (productId) => {
  try {
    return await ProductModel.findById(productId);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createProductHelper,
  deleteProductHelper,
  getProductsHelper,
  updateProductHelper,
  getProductByIdHelper,
};
