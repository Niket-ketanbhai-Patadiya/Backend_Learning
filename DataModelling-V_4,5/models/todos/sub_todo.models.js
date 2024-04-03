import mongoose, { mongo } from 'mongoose';

const subTodoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = new mongoose.model('SubTodo', subTodoSchema);
