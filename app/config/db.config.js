module.exports = {
  HOST: "ec2-18-214-35-70.compute-1.amazonaws.com",
  USER: "nxivsanfvvwhtz",
  PASSWORD: "a93f3aa865d8d39cea9b0ab82933bceaf9dd7370f664069ee4cf9c3077b587ce",
  PORT: 5432,
  DB: "dbuhjv99a3u87j",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
