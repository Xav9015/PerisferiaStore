const { Router } = require('express');
const { add_NewProduct, createProduct } = require('../controllers/createProd');
const { create_record_user } = require('../controllers/createUser');
const { addNewFavorite } = require('../controllers/addFavorites');
const { creation_relation } = require('../controllers/addOrders');
const upload = require('../../fileUpload');

const router_Post = Router();

router_Post.post('/', upload.single('image'), add_NewProduct);

router_Post.post('/user', create_record_user);
router_Post.post('/user/favorites', addNewFavorite);
router_Post.post('/order', creation_relation);
// router_Post.post('/login', authController);


module.exports = router_Post;

/**
 * especificar los rangos (tenerlos mas explicitos)
 * aplicar ordenamiento
 * aplicar formulario
 * autentificaciones
 * notificaciones
 */