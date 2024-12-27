import Pet from '../models/pet.js';

export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addPet = async (req, res) => {
  const { name, age, breed, description, image } = req.body;
  try {
    const pet = await Pet.create({ name, age, breed, description, image });
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
