import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


import { validGrades, validSubjects } from './../constants/constant.js';

// // Define constants for valid grades and subjects
// const validGrades = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
// const validSubjects = ['Mathematics', 'English', 'Science', 'Social Science', 'Hindi', 'Other'];


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // Searching  fields (little bit optimized )
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },
    userType: {
      type: String,
      enum: ['Tutor', 'Student'],
      default: 'Student'
    },
    userLanguage: {
      type: String,
    },
    classGrade: {
      type: String,
      required: false,
      validate: {
        validator: function (v) {
          if (this.userType === 'Student') {
            return validGrades.includes(v);       // Validate that the classGrade is in a specific range for students
          }
          return true;                                // No validation needed for tutors
        },
        message: 'Class grade is required for students.',
      },
    },
    subjectExpertise: {
      type: String,
      required: false,
      validate: {
        validator: function (v) {
          if (this.userType === 'Tutor') {
            return validSubjects.includes(v);       // Validate that the subjectExpertise is one of the allowed subjects for tutors
          }
          return true; // No validation needed for students
        },
        message: 'Subject expertise is required for tutors.',
      },
    },
    avatar: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // this.password = await bcrypt.hash(this.password, 10);

  const salt = await bcrypt.genSalt(10);
  const usersPasswordHashed = await bcrypt.hash(this.password, salt);
  this.password = usersPasswordHashed;


  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
  const payload = {
    _id: this._id,
    email: this.email,
    username: this.username,
  }

  return jwt.sign(payload,
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
}

userSchema.methods.generateRefreshToken = function () {

  const payload = { _id: this._id, }

  return jwt.sign(payload,
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
}



export const User = mongoose.model('User', userSchema);