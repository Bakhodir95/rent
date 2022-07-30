module.exports = {
  HOST: "localhost",
  USER: "Bakhodir95",
  PASSWORD: "",
  DB: "rent_car",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
};
