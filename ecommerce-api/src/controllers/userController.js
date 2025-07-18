import User from '../models/user.js';

async function getUsers(req, res) {
  try {
    const users = await User.find().populate('category').sort({ name: 1 });
    res.json(users);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id).populate('category');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).send({ error });
  }
}


async function createUser(req, res) {
  try {
    const { displaName, email, hashPassword, rele, avatar, phone  } = req.body;

    if (!displaName || !email || !hashPassword || !rele || !avatar || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = await User.create({ displaName, email, hashPassword, rele, avatar, phone });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { displaName, email, hashPassword, rele, avatar, phone } = req.body;

    if (!displaName || !email || !hashPassword || !rele || !avatar || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedUser = await User.findByIdAndUpdate(id,
      { displaName, email, hashPassword, rele, avatar, phone },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
}

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}