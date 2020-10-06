const jwt = require("jsonwebtoken");
const privateKey = require("../config/keys").privateKey;
const auth = (req, res, next) => {
  const token = req.header("x-auth-header");
  if (token) {
    try {
      jwt.verify(token, privateKey, (err, decode) => {
        if (err) throw err;
        req.userId = decode.id;
        next();
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid token" });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "No token present, Authorization error",
    });
  }
};

module.exports = auth;
