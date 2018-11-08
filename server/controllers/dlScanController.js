require("dotenv").config();
const axios = require("axios");

module.exports = {
  scannedDL: (req, res, next) => {
    // console.log(process.env.MB_TOKEN)
    // console.log("google id", req.user.auth_id);
    console.log(req.body);
    const db = req.app.get("db");
    const { base64 } = req.body;
    // db.submit_dl_scan([base64])
    //req.user.user.id,
    console.log(req.body.base64)
      .then(response => {
        // axios
        //   .post("https://api.microblink.com/recognize/execute", {
        //     headers: {Authorization:process.env.MB_TOKEN},
        //     recognizers: ["USDL", "PDF417", "QR"],
        //     imageBase64: base64
        //   })
          // .then(console.log("success"))
          // .catch(err => {
          //   console.log(err);
          // });
        console.log("test", response);
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
