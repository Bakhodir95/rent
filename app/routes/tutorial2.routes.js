module.exports = (app) => {
  const tutorials1 = require("../controllers/tutorial2.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", tutorials1.create);
  // Retrieve all Tutorials
  router.get("/", tutorials1.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials1.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials1.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials1.update);
  // Delete a Tutorial with id
  router.delete("/:id", tutorials1.delete);
  // Delete all Tutorials
  router.delete("/", tutorials1.deleteAll);
  app.use("/api/categories", router);
};

// These are our routes:

// /api/tutorials: GET, POST, DELETE
// /api/tutorials/:id: GET, PUT, DELETE
// /api/tutorials/published: GET
