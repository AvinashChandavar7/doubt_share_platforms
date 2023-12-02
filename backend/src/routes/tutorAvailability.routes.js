import { Router } from "express";
import { updateTutorPing, getAvailableTutors } from "../controllers/tutorAvailability.controller.js";

const router = Router();

router.post('/update-tutor-ping', updateTutorPing);

router.get('/count-available-tutors', getAvailableTutors);


export default router;
