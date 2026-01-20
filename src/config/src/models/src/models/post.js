module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    paranoid: true
  });

  Post.associate = (models) => {
    Post.belongsTo(models.Author, { foreignKey: "authorId" });
  };

  return Post;
};
