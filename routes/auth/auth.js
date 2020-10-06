const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const privateKey = require("../../config/keys").privateKey;
const router = express.Router();
const authMiddleware = require("../../middleware/auth");
const User = require("../../models/User");
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });
  }
  User.findOne({ email })
    .then(async (user) => {
      if (user) {
        try {
          const userVerify = await bcrypt.compare(password, user.password);
          if (userVerify) {
            jwt.sign(
              { id: user._id },
              privateKey,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) {
                  throw err;
                }
                return res.status(200).json({
                  token,
                  user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                  },
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ success: false, message: "Invalid Credentials" });
          }
        } catch (err) {
          return res.status(400).json({ success: false, message: err.message });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "User does not exist with this email id",
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        success: false,
        message: err.message,
      })
    );
});

router.get("/user", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select("-password -__v");
  return res.json({ user });
});

module.exports = router;
