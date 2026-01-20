const express = require("express");
const app = express();
const passport = require("./config/passport");

app.use(express.json());
app.use(passport.initialize());

const authorRoutes = require("./routes/authorRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/api/authors", authorRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
