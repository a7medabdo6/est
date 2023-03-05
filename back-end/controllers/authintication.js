const jwt = require("jsonwebtoken");

exports.userLogin = (req, res, next) => {
  if (req.body.email == "amrabdo33877@gmail.com") {
    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "15m" }
    );

    res.json({ message: "Login Success", token, status: 200 });
  } else if (req.body.email == "retagahmadoly269@gmail.com") {
    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "15m" }
    );

    return res.json({ message: "Login Success", token, status: 200 });
  } else if (req.body.email == "tasneemnasef269@gmail.com") {
    let token = jwt.sign(
      {
        email: req.body.email,
      },
      "ESTEXAM",
      { expiresIn: "15m" }
    );

    return res.json({ message: "Login Success", token, status: 200 });
  } else {
    return res.json({ message: "Unauthorizied", status: 401 });
  }
};
