const fs = require("fs");

const amrProfileObj = fs.readFileSync("./data/amr-profile.json");
const retagProfileObj = fs.readFileSync("./data/retag-profile.json");
const tasnemProfileObj = fs.readFileSync("./data/tasnem-profile.json");


module.exports = (req, res, next) => {
  if (req.email == "amrabdo33877@gmail.com") {
    const amrProfile = JSON.parse(amrProfileObj);

    res.status(200).json({ message: "Profile Date", amrProfile, status: 200 });
  } else if (req.email == "retagahmadoly269@gmail.com") {
    const retagProfile = JSON.parse(retagProfileObj);

    res
      .status(200)
      .json({ message: "Profile Date", retagProfile, status: 200 });
  } else if (req.email == "tasneemnasef269@gmail.com") {
    const tasnemProfile = JSON.parse(tasnemProfileObj);

    res
      .status(200)
      .json({ message: "Profile Date", tasnemProfile, status: 200 });
  } else {
    res.status(200).json({ message: "Not Authorized.", status: 400 });
  }
};
