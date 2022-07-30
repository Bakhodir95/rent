module.exports = (app) => {
  const tutorials2 = require("../controllers/tutorial3.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", tutorials2.create);
  // Retrieve all Tutorials
  router.get("/", tutorials2.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials2.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials2.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials2.update);
  // Delete a Tutorial with id
  router.delete("/:id", tutorials2.delete);
  // Delete all Tutorials
  router.delete("/", tutorials2.deleteAll);
  app.use("/api/cars", router);
};

// These are our routes:

// /api/tutorials: GET, POST, DELETE
// /api/tutorials/:id: GET, PUT, DELETE
// /api/tutorials/published: GET
