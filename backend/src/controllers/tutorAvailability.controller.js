import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/apiError.js";

import { User } from "../models/user.model.js"
import { TutorAvailabilityModel } from "../models/TutorAvailability.model.js"

import cron from 'node-cron';

const updateTutorPing = asyncHandler(async (req, res) => {
  const { userId } = req.body; // Assuming userId is sent in the request body

  // Check if the tutor is registered
  const tutor = await User.findOne({ _id: userId, userType: 'Tutor' });

  if (!tutor) {
    throw new ApiError(404, "Tutor not found")
  }

  // Update the tutor's last ping time
  const updatedTutorPing = await TutorAvailabilityModel.findOneAndUpdate(
    { tutorId: userId },
    { lastPing: new Date() },
    { upsert: true }
  );

  return res.status(200).json(new ApiResponse(200, updatedTutorPing, "Ping updated successfully"));
});


const countAvailableTutors = async () => {
  try {
    // Count the number of available tutors (those with recent ping times)
    const threeSecondsAgo = new Date(Date.now() - 3000);

    const availableTutorsCount = await TutorAvailabilityModel.countDocuments({
      lastPing: { $gt: threeSecondsAgo },
    });

    console.log(`[${new Date()}] Available Tutors Count: ${availableTutorsCount}`);
  } catch (error) {
    console.error('Error counting available tutors:', error);
  }
};

const getAvailableTutors = asyncHandler(async (req, res) => {
  // Call the countAvailableTutors function to get the count
  await countAvailableTutors();

  // Return a response (if needed)
  return res.status(200).json(new ApiResponse(200, null, "Available Tutors Count Checked"));
});


// Run every 30 minutes, adjust as needed
const CRON_INTERVAL = '*/30 * * * *';

// Schedule the CRON job to run at the specified interval
cron.schedule(CRON_INTERVAL, async () => {
  try {
    await countAvailableTutors();
  } catch (error) {
    console.error('Error counting available tutors:', error);
  }
});

export { updateTutorPing, countAvailableTutors, getAvailableTutors };
