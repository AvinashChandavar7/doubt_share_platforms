import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import passport from 'passport';
import { jwtStrategy } from "./config/passports.js"

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))

app.use(cookieParser());

//! routes import

import userRouter from "./routes/user.routes.js";
import doubtRequestRouter from "./routes/doubtRequest.routes.js";
import tutorAvailabilityRouter from "./routes/tutorAvailability.routes.js";


//! routes declarations

//* User Authentication Routes
app.use("/api/v1/users", userRouter)

app.use(passport.initialize());


//* Doubt Request Routes
app.use(
  "/api/v1/doubtRequest",
  passport.authenticate('jwt', { session: false }),
  doubtRequestRouter
);

//* Tutor Availability Routes
app.use(
  "/api/v1/tutorAvailability",
  passport.authenticate('jwt', { session: false }),
  tutorAvailabilityRouter
);

app.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      res.status(200).send('Homepage');
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  })


export { app };

