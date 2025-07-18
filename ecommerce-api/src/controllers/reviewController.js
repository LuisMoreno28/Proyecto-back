import Review from '../models/review.js';

async function getReviews(req, res) {
  try {
    const reviews = await Review.find().populate('category').sort({ name: 1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getReviewById(req, res) {
  try {
    const id = req.params.id;
    const review = await Review.findById(id).populate('category');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).send({ error });
  }
}


async function createReview(req, res) {
  try {
    const { User, Product } = req.body;

    if (!User || !Product) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newReview = await Review.create({ User, Product });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).send({ error });
  }
}


export {
  getReviews,
  getReviewById,
  createReview,
}