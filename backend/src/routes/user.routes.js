import { Router } from "express";
import { registerUser, loginUser, getCurrentUser } from "../controllers/user.controller.js";
import authenticatePassport from "../middlewares/auth.js";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get('/current-user', authenticatePassport, getCurrentUser);


export default router;

// passport.authenticate('jwt', { session: false }),