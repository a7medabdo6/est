const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token, decode;
  try {
    token = req.get("Authorization").split(" ")[1];
    decode = jwt.verify(token, "ESTEXAM");
    
  } catch (error) {
    error.message = "Not Authorized";
    error.status = 403;
    next(error);
  }
  if (decode !== undefined) {
    req.email = decode.email;
    next();
  }
};

// any req will have email
