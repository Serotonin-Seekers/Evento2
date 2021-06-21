// this is the main file where handlebars will be rendered based on the routes
// Each event will be viewed

// const router = require("express").Router();

// GET all events for viewAllEvents
// router.get("/", async (req, res) => {
//   try {
//     const dbEventData = await Event.findAll();

//     const events = dbEventData.map((event) =>
//       event.get({ plain: true })
//     );

//     res.render("viewallevents", {
//       events,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one event
// router.get("/event/:id", async (req, res) => {
//   try {
//     const dbEventData = await Event.findByPk(req.params.id,);

//     const event = dbEventData.get({ plain: true });
//     res.render("viewevents", { event });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
