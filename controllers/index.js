const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const { Event, User } = require("../models");

// const apiRoutes = require("")

router.use("/api", apiRoutes);
//start of kitchen -DW

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/addevent", async (req, res) => {
  res.render("addevent");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/viewevents", async (req, res) => {
  res.render("viewevents");
});

router.get("/allevents", async (req, res) => {
   try {
     const dbEventData = await Event.findAll();

     const events = dbEventData.map((event) => event.get({ plain: true }));

     res.render("viewallevents", {
       events,
     });
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   };
  //  I SOMEHOW GOT THIS WORKING!!! JH - Views the link of the events
});

router.get("/event/:id", async (req, res) => {
  try {
    const dbEventData = await Event.findByPk(req.params.id);

    const event = dbEventData.get({ plain: true });
    res.render("viewevents", { event });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  console.log(req.params.id)
});



// JH No longer need the below as the pages are now rendered from handlebars not the html files - Placed the html into an 'old' folder

// router.get("/", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../views/index2.html"));
// });

// router.get("/addevent", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../views/addevent.html"));
// });

// router.get("/signup", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../views/signup.html"));
// });

// router.get("/login", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../views/login.html"));
// });

// router.get("/viewevents", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../views/viewevents.html"));
// });

// 18/06 JH - Dont currently have links working to each page but if you type the path in the get() [ie: http://localhost:3001/addevent ] you can view the page :)

module.exports = router;
// Router has extra functionality to allow us to push apiRoutes variable to api folder
