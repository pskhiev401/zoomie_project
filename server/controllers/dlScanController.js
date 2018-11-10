require("dotenv").config();
const axios = require("axios");

module.exports = {
  scannedDL: (req, res, next) => {
    // console.log(process.env.MB_TOKEN)
    // console.log("google id", req.user.auth_id);
    // console.log(req.body);
    const db = req.app.get("db");
    const { base64 } = req.body;
    axios
    .post("https://api.microblink.com/recognize/execute", {recognizers: ["USDL", "PDF417"],imageBase64: base64
    },{headers: { Authorization: process.env.MB_TOKEN, "Content-Type": "application/json" }}, )
    .then(response => res.status(200).json(response.data.data[0].result)).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
  }
};
