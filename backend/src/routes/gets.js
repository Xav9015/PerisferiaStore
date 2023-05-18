const { Router } = require('express');
const { getAllProducts, createRecordProduct } = require('../controllers/productControllers');
const { addProductById } = require('../controllers/addProductById');
const { get_Products_By_Name } = require('../controllers/addProductByName');
const { get_user } = require('../controllers/getUser');
//const { login_User } = require('../controllers/authController');
const router_get = Router();

router_get.get('/', createRecordProduct);
router_get.get('/store', getAllProducts);
router_get.get('/store/name', get_Products_By_Name);
router_get.get('/store/:id', addProductById);
router_get.get('/usuarios', get_user)
//router_post.post('/login', login_User);

module.exports = router_get
