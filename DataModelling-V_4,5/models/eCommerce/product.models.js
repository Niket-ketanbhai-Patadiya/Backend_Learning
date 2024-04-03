import mongoose, { mongo } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String, //compulsory field
      required: true,
    },
    name: {
      type: String,
      requireed: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      requireed: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
