import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

import { User } from "../models/user.model.js"
import { DoubtRequest } from "../models/doubtRequest.model.js"


const createDoubt = asyncHandler(async (req, res) => {
  const { studentId, subject, description, language } = req.body;

  // Check if the student is registered
  const student = await User.findOne({ _id: studentId, userType: 'Student' });

  if (!student) {
    throw new ApiError(404, "Student not found");
  }

  // Create a new doubt request
  const newDoubt = await DoubtRequest.create(
    { studentId, subject, description, language, }
  );

  return res.status(201).json(new ApiResponse(200, newDoubt, "Doubt created successfully"));
});

const getAllDoubts = asyncHandler(async (req, res) => {

  // Retrieve all doubts for the given student
  const doubts = await DoubtRequest.find({}).sort({ createdAt: -1 });
  // const doubts = await DoubtRequest.find({ studentId }).sort({ createdAt: -1 });

  // console.log('Doubts:', doubts);

  return res.status(201).json(new ApiResponse(200, doubts, "Retrieved all Doubt "));
});

const getDoubtHistory = asyncHandler(async (req, res) => {
  // const { studentId } = req.query;
  const { studentId } = req.body;

  // console.log('studentId:', studentId);

  // Retrieve all doubts for the given student
  const doubts = await DoubtRequest.find({ studentId }).sort({ createdAt: -1 });

  // console.log('Doubts:', doubts);

  return res.status(201).json(new ApiResponse(200, doubts, "Retrieved all Doubt "));
});

const getDoubtById = asyncHandler(async (req, res) => {
  const { doubtId } = req.params;

  // console.log('doubtId:', doubtId);

  // Retrieve the doubt by its ID
  const doubt = await DoubtRequest.findById(doubtId);

  if (!doubt) {
    return res.status(404).json(new ApiResponse(404, null, "Doubt not found"));
  }

  return res.status(200).json(new ApiResponse(200, doubt, "Retrieved the Doubt by ID"));
});

const updateDoubtStatus = asyncHandler(async (req, res) => {
  const { doubtId } = req.params;
  const { status } = req.body;

  // Update the status of the doubt request
  const updatedDoubt = await DoubtRequest.findOneAndUpdate(
    { _id: doubtId },
    { $set: { status: status } },
    { new: true }
  );

  // console.log('Query Result:', updatedDoubt);

  if (!updatedDoubt) {
    console.error('Doubt not found for doubtId:', doubtId);
    return res.status(404).json(new ApiResponse(404, null, "Doubt not found"));
  }

  return res.status(200).json(new ApiResponse(200, updatedDoubt, "Updated the status of the doubt "));
});


const deleteDoubtById = asyncHandler(async (req, res) => {
  const { doubtId } = req.params;

  // console.log('doubtId:', doubtId);

  // Find and delete the doubt by its ID
  const deletedDoubt = await DoubtRequest.findByIdAndDelete(doubtId);

  if (!deletedDoubt) {
    throw new ApiError(404, "Doubt not found");
  }


  res.status(200).json(new ApiResponse(200, deletedDoubt, "Doubt deleted successfully"));
});


export {
  createDoubt,
  getAllDoubts,
  getDoubtById,
  getDoubtHistory,
  updateDoubtStatus,
  deleteDoubtById
};
