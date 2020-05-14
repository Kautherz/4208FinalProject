var express = require('express');
var router = express.Router();
const {getGender, setBag, getProduct, getBag, addBag, deleteProduct} = require('../controllers/game.controllers');


router.get('/products', getGender);
router.post('/addProduct', addBag);
router.get('/product', getProduct);
router.post('/deleteProduct', deleteProduct);
router.get('/getBag', getBag);
router.post('/setBag', setBag);


module.exports = router;