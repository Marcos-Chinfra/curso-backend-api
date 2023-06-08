const express = require('express');
const CategoriesService = require('../services/categories.service')
const service = new CategoriesService();
const router = express.Router();


router.get('/:categoryId/products/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  const category = service.findOne(categoryId, productId);
  res.json(category)
})

module.exports = router;
