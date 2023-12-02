import mongoose from 'mongoose';
import { validLanguage } from '../constants/constant.js';


// const validLanguage = ['english', 'kannada', 'tamil', 'telugu', 'malayalam', 'hindi', 'marathi', 'gujarati', 'bengali', 'punjabi', 'other'];

const doubtRequestSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tutorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      enum: validLanguage,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending',
    },
    chatHistory: [
      {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        message: {
          type: String,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },],
  },
  { timestamps: true }
);

export const DoubtRequest = mongoose.model('DoubtRequest', doubtRequestSchema);
