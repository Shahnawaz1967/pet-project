import express from 'express';
import { getAllPets, addPet } from '../controllers/petController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllPets);
router.post('/', protect, addPet);

export default router;
