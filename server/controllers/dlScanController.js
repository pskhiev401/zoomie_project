require("dotenv").config();
const axios = require("axios");

module.exports = {
  scannedDL: (req, res, next) => {
    // console.log(process.env.MB_TOKEN)
    // console.log("google id", req.user.auth_id);
    // console.log(req.body);
    const db = req.app.get("db");
    const { base64 } = req.body;
    // db.submit_dl_scan([base64]);
    //   console.log(req.body.base64)
    // .then(response => {
    axios
      .post("https://api.microblink.com/recognize/execute", {recognizers: ["USDL", "PDF417"],imageBase64: base64
      },{headers: { Authorization: process.env.MB_TOKEN, "Content-Type": "application/json" }}, )
      .then(response => res.status(200).json(response.data)).catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }
};
