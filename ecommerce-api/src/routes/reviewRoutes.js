import express from 'express';
import {
  getReviews,
  getReviewById,
  createReview,
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/reviews', getReviews);
router.get('/reviews/:id', getReviewById);
router.post('/reviews', createReview);

export default router;