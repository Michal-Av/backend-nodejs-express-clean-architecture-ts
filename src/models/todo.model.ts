// todo.model.ts

import mongoose, { Document } from 'mongoose';

export interface Todo {
  title: string;
  description?: string;
  status: 'Open' | 'In Progress' | 'Done';
  flag?: 'Red' | 'Orange' | 'Green';
}

export interface TodoDocument extends Todo, Document {}

const todoSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Done'],
    default: 'Open'
  },
  flag: {
    type: String,
    enum: ['Red', 'Orange', 'Green'],
  }
});

export default mongoose.model<TodoDocument>('todos', todoSchema);
