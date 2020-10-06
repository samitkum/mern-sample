const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

// Post request to get the data and register the user

router.post("/register", (req, res) => {
  const { email, name, password } = req.body;

  // Validation
  if (!email || !name || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter all the fields",
    });
  }

  // check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist with this email id",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    // generate the hash of the password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.json({ err: err.message });

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return res.json({ err: err.message });

        newUser.password = hash;
        newUser
          .save()
          .then(() =>
            res.json({ success: true, message: "Registeration successful" })
          )
          .catch((err) => res.json({ success: false, message: err.message }));
      });
    });
  });
});

module.exports = router;
