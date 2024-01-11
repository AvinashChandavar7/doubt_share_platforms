import passport from "passport";
import { ApiError } from "../utils/ApiError.js";


const verifyCallback = (req, resolve, reject) => async (err, user, info) => {

  if (err || info || !user) {
    reject(new ApiError(401, "Please authenticate"));
  }

  req.user = user;
  resolve();
};

// Auth middleware to authenticate using Passport "jwt"
//strategy with sessions disabled and a custom callback function

const authenticatePassport = async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt", { session: false },
      verifyCallback(req, resolve, reject)
    )(req, res, next);
  })
    .then(() => {
      console.log('Authentication successful:', req.user);
      next();
    })
    .catch((err) => {
      console.error('Authentication error:', err);
      next(new ApiError(401, "Please authenticate"));
    });
};

export default authenticatePassport;