const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 4000;

sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
