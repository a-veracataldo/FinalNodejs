import Product from "../models/Product";

export const createProducts = async (req, res) => {
  const { nombre, precio, descripcion, marca, unidades } = req.body;

  const newProduct = new Product({
    nombre,
    precio,
    descripcion,
    marca,
    unidades,
  });

  const productSave = await newProduct.save();

  res.status(201).json(productSave);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductsId = async (req, res) => {
  const productID = await Product.findById(req.params.productId);

  res.status(200).json(productID);
};

export const updateProductsId = async (req, res) => {
  const updateProducts = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );

  res.status(204).json(updateProducts);
};
export const deleteProductsId = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);

  res.status(204).json();
};
