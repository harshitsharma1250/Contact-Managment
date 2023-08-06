const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization; // Use lowercase 'authorization'

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    res.status(401);
    throw new Error("User is not authorized or token is missing");
  }

  try {
    const decoded = jwt.verify(token, "harshit123");
    req.user = decoded.user;
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401);
    throw new Error("User is not authorized");
  }
});

module.exports = validateToken;
