require("./models")
// needed this to allow sequelise to read the models table
const path = require("path");
const express = require("express");
// Import express-session
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
// looks for index.js
const sequelize = require("./config/connection");
// connect to sql with sequelize
const helpers = require("./utils/helpers");



const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: true,
};
// need to READ UP ON THIS

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
//JH - all of handlebars npm has the rendered functions in homeRoutes.js (controller folder)
// these renders are done based on the .handlebars files found in the view folder

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public/")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on Port: ${PORT}`));
});
