import passport from "passport";
import { Strategy, ExtractJwt, } from "passport-jwt"

import { User } from "../models/user.model.js"


// jwt secret environment variable set in ".env"
// const secretKey = process.env.SECRET_KEY;
const secretKey = process.env.ACCESS_TOKEN_SECRET;

const jwtOptions = {
  secretOrKey: secretKey,   // to check the token secret key must needed to getting from .env variable
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),   // for check token is same or not
};

// const jwtVerify = async (payload, done) => {
//   try {
//     // Find the user by username (based on the payload data)
//     const user = await User.findOne({ username: payload.username });
//     if (user) {
//       // If the user is found, pass it to the next middleware
//       return done(null, user);
//     } else {
//       // If the user is not found, return 'false' indicating authentication failure
//       return done(null, false);
//     }
//   } catch (error) {
//     // If there is an error, return it with 'false' indicating authentication failure
//     return done(error, false);
//   }
// }

// const jwtStrategy = new Strategy(jwtOptions, jwtVerify);

const jwtStrategy = new Strategy(jwtOptions, async (payload, done) => {
  try {
    // Find the user by username (based on the payload data)
    const user = await User.findOne({ username: payload.username });
    if (user) {
      // If the user is found, pass it to the next middleware
      return done(null, user);
    } else {
      // If the user is not found, return 'false' indicating authentication failure
      return done(null, false);
    }
  } catch (error) {
    // If there is an error, return it with 'false' indicating authentication failure
    return done(error, false);
  }
});

passport.use(jwtStrategy);

export { jwtStrategy };
