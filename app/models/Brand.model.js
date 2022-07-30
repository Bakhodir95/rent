module.exports = (sequelize, Sequelize) => {
  const Brand = sequelize.define("brand", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand_image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Brand;
};
