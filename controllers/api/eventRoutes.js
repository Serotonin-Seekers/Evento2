const router = require("express").Router();
// Need this in each route js file!
const { Event } = require("../../models");

// /api/events/ - Current path

router.post("/", async (req, res) => {
  try {
    const eventDbData = await Event.create(req.body);
    console.log(req.body);

    res.status(200).json(eventDbData)


  } catch (error) {
      console.log(error);
      res.status(500).json(error)
  }
});

module.exports = router;
