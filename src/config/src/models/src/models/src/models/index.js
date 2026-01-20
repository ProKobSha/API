const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Author = require("./author")(sequelize, Sequelize.DataTypes);
const Post = require("./post")(sequelize, Sequelize.DataTypes);

Author.associate({ Post });
Post.associate({ Author });

module.exports = { sequelize, Author, Post };
