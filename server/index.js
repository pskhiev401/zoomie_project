require("dotenv").config();
// **** IMPORT DEPENDENCIES *****
const express = require("express");
const app = express();
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const cors = require("cors");

const {
  getAll,
  submitDL,
  getCompletedDlForm,
  finalDLsubmit
} = require("./controllers/dlcontroller");

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

// *** ENDPOINTS *****
// app.get("/api/test", getAll)
app.post("/api/dlform", submitDL);
app.get("/api/getdlform", getCompletedDlForm);
app.put("/api/finalDL/:id", finalDLsubmit);

app.listen(port, () => {
  console.log(`BEEP Listening on port ${port}`);
});
