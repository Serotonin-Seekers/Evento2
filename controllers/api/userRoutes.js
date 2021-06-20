const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userTableData = await User.create(req.body);
    
    req.session.save(() => {
      req.session.loggedIn = true;
      //   Creates a key in the session
      req.session.username = userTableData.id;
      // saves the session logged in as true; saves the User table id for that account in the session data. - If this matches therefore it is authenticated
    });

    res.status(200).json(userTableData);
    console.log(res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;
      
      res
        .status(200)
        .json({ username: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  console.log(req.session.loggedIn)
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log(`test logout ${req.session.loggedIn}`);
    res.status(404).end();
  }
});

// this path location /api/users

//   This is for the user authentication - to save user_id

// Use ex 19 - Week 14 to set up Login and create new user

module.exports = router;
