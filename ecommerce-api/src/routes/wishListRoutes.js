import express from 'express';
import {
  getWishLists,
  createWishList,
  updateWishList,
  deleteWishList,
} from '../controllers/wishListController.js';

const router = express.Router();

router.get('/wishLists', getWishLists);
router.post('/wishLists', createWishList);
router.put('/wishLists/:id', updateWishList);
router.delete('/wishLists/:id', deleteWishList);

export default router;