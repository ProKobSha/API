const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
require("dotenv").config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    // En un proyecto real buscarías el usuario en DB
    // Aquí asumimos que el token es válido
    return done(null, jwt_payload);
  })
);

module.exports = passport;
