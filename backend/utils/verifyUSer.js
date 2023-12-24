const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(new Error("unauthorizrd User please login"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next(new Error("Token is not valid"));
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
