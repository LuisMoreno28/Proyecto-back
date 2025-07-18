import mongoose from 'mongoose';

const shippingAdressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    adress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
        min: 4,
        max: 6
    },
});

const ShippingAdress = mongoose.model('ShippingAdress', shippingAdressSchema);

module.exports = ShippingAdress;