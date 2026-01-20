module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    paranoid: true
  });

  Author.associate = (models) => {
    Author.hasMany(models.Post, { foreignKey: "authorId" });
  };

  return Author;
};
