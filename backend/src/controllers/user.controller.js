
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/apiError.js";

import { User } from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res) => {

  const { username, email, password, userType } = req.body;

  console.log("Body", req.body);

  if ([username, email, password, userType].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All field is required")
  }

  const exitedUser = await User.findOne({
    $or: [{ email }, { username }]
  });

  if (exitedUser) {
    throw new ApiError(409, "User with email or username already exited")
  }

  const user = await User.create({
    username: username.toLowerCase(),
    email,
    password,
    userType
  });

  if (!user) {
    throw new ApiError(400, "Invalid user")
  }

  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});



const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;


  console.log("Body", req.body);

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Check if the password is correct
  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Generate a token
  const token = user.generateAccessToken();


  return res.status(201).json(new ApiResponse(200, { user: user, token }, "User Login Successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const currentUser = req.user;

  console.log("currentUser => ", req.user._id);

  if (!currentUser) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(new ApiResponse(200, currentUser, 'Current user retrieved successfully'));
});




export { registerUser, loginUser, getCurrentUser };
