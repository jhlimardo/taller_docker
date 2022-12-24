import  express from 'express';
import ProductController from "../controllers/product.controller.js";
import AuthMiddleware from '../shared/middlewares/ensure_auth.js';

let router = express.Router();

router.use(AuthMiddleware.user);

router.route('/products/:id?')
    .get(ProductController.get)
    .post(ProductController.store)
    .put(ProductController.store)
    .delete(ProductController.delete)

export default router;
