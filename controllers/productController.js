const Product = require('../models/Product');
const { NotFoundError, ValidationError } = require('../utils/errors');

const getProducts = async (req, res) => {
  // Filtering
  const filter = {};
  if (req.query.category) {
    filter.category = req.query.category;
  }
  if (req.query.inStock) {
    filter.inStock = req.query.inStock === 'true';
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const [products, total] = await Promise.all([
    Product.find(filter).skip(skip).limit(limit),
    Product.countDocuments(filter)
  ]);

  const totalPages = Math.ceil(total / limit);

  res.json({
    products,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  });
};

const getProductById = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new NotFoundError('Product not found');
  }
  res.json(product);
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

const updateProduct = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!product) {
    throw new NotFoundError('Product not found');
  }
  res.json(product);
};

const deleteProduct = async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    throw new NotFoundError('Product not found');
  }
  res.status(204).send();
};

const searchProducts = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    throw new ValidationError('Name query parameter is required');
  }
  const products = await Product.find({
    name: { $regex: name, $options: 'i' }
  });
  res.json(products);
};

const getProductStats = async (req, res) => {
  const stats = await Product.aggregate([
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    }
  ]);
  res.json(stats);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductStats
};