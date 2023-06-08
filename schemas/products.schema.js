const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductsSchema = Joi.object({
  name: name.required(),
  price: price.required(),
})

const updateProductsSchema = Joi.object({
  name: name,
  price: price,
});

const getProductsSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema }
