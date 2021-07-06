require("./models");
const bcrypt = require("bcrypt");
// needed this to allow sequelise to read the models table
const path = require("path");
const express = require("express");
// Import express-session
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
// looks for index.js
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
// connect to sql with sequelize
const helpers = require("./utils/helpers");
const router = require("./controllers/api/eventRoutes");
const { User } = require("./models");
const compression = require('compression')

const app = express();
const PORT = process.env.PORT || 3001;




User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error();
    });
  // hashes the password
});

// router.post("/signup", async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//   } catch (error) {}
// });

// Set up sessions
const sess = {
  secret: "jacob danni ricky",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// middleware 
app.use(session(sess));
app.use(compression())

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
