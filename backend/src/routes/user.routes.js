import { Router } from "express";
import { registerUser, loginUser, getCurrentUser } from "../controllers/user.controller.js";
import authenticatePassport from "../middlewares/auth.js";
import passport from "passport";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get('/current-user',
  // authenticatePassport,
  passport.authenticate('jwt', { session: false }),

  getCurrentUser);


export default router;
