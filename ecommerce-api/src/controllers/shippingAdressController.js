import ShippingAdress from '../models/shippingAdress.js';

async function getShippingAdresss(req, res) {
  try {
    const shippingAdresss = await ShippingAdress.find().populate('category').sort({ name: 1 });
    res.json(shippingAdresss);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function getShippingAdressById(req, res) {
  try {
    const id = req.params.id;
    const shippingAdress = await ShippingAdress.findById(id).populate('category');
    if (!shippingAdress) {
      return res.status(404).json({ message: 'ShippingAdress not found' });
    }
    res.json(shippingAdress);
  } catch (error) {
    res.status(500).send({ error });
  }
}


async function createShippingAdress(req, res) {
  try {
    const { user, adress, city, state, postalCode } = req.body;

    if (!user || !adress || !city || !state || !postalCode) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newShippingAdress = await ShippingAdress.create({ user, adress, city, state, postalCode });
    res.status(201).json(newShippingAdress);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function updateShippingAdress(req, res) {
  try {
    const id = req.params.id;
    const { user, adress, city, state, postalCode } = req.body;

    if (!user || !adress || !city || !state || !postalCode) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const updatedShippingAdress = await ShippingAdress.findByIdAndUpdate(id,
      { user, adress, city, state, postalCode },
      { new: true },
    );

    if (!updatedShippingAdress) {
      return res.status(404).json({ message: 'ShippingAdress not found' });
    }
    res.status(200).json(updatedShippingAdress);
  } catch (error) {
    res.status(500).send({ error });
  }
}
async function deleteShippingAdress(req, res) {
  try {
    const id = req.params.id;
    const deletedShippingAdress = await ShippingAdress.findByIdAndDelete(id);
    if (!deletedShippingAdress) {
      return res.status(404).json({ message: 'ShippingAdress not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error });
  }
}

export {
  getShippingAdresss,
  getShippingAdressById,
  createShippingAdress,
  updateShippingAdress,
  deleteShippingAdress,
}