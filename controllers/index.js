const router = require("express").Router();
const path = require("path")
const apiRoutes = require("./api")
// const apiRoutes = require("")

router.use("/api", apiRoutes);
//start of kitchen -DW 


router.get("/", async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/index2.html"));
});

router.get("/addevent", async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/addevent.html"));
});

router.get("/signup", async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/signup.html"));
});

router.get("/login", async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/viewevents", async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/viewevents.html"));
});

// 18/06 JH - Dont currently have links working to each page but if you type the path in the get() [ie: http://localhost:3001/addevent ] you can view the page :)


module.exports = router;
// Router has extra functionality to allow us to push apiRoutes variable to api folder
