const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = { Sequelize: Sequelize, sequelize: sequelize };

db.Brand = require("./Brand.model")(sequelize, Sequelize);
db.Category = require("./Category.model")(sequelize, Sequelize);
db.Car = require("./Car.model")(sequelize, Sequelize);

db.Brand.hasMany(db.Car);
db.Car.belongsTo(db.Brand);
db.Category.hasMany(db.Car);
db.Car.hasMany(db.Category);

module.exports = db;
