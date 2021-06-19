const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userTableData = await User.create(req.body);
    console.log(req.body);

    res.status(200).json(userTableData);
    console.log(res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// this path location /api/users
//    req.session.save(() => {
//       req.session.loggedIn = true;
//     //   Creates a key in the session
//       req.session.user_name = dbUserDate.id

//   This is for the user authentication - to save user_id

// Use ex 19 - Week 14 to set up Login and create new user

module.exports = router;
