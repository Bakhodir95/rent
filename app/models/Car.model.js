module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("car", {
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
    insurance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    fuel: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    car_image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Car;
};
