const router = require("express").Router();
// Need this in each route js file!
const { Event } = require("../../models");
// calling apon event model aka how the food needs to be presented DW JH

// /api/events/ - Current path <-----
// backend path

router.post("/", async (req, res) => {
  // we in kitchen now and telling kitchen how we want our food made
  // we are server now
  try {
    const eventTableData = await Event.create(req.body);
    // reason why req.body is in nice object format is due to variable formData in addevent.js

    res.status(200).json(eventTableData)


  } catch (error) {
      console.log(error);
      res.status(500).json(error)
  }
});

module.exports = router;
