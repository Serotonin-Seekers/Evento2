const router = require("express").Router();
const path = require("path")

router.get("/", async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;
