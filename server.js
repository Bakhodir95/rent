const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:4041",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
// app.get("/api/tutorials", (req, res) => {
//   res.json({ message: "Salom Node.JS" });
// });

const db = require("./app/models");
db.sequelize
  //{ force: true }
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/tutorial.routes")(app);
require("./app/routes/tutorial2.routes")(app);
require("./app/routes/tutorial3.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
