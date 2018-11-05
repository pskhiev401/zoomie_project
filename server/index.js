require("dotenv").config();
// **** IMPORT DEPENDENCIES *****
const express = require("express");
const app = express();
const session = require("express-session");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const cors = require("cors");
const authCtrl = require("./controllers/authcontroller");
const passport = require("passport");

const {
  getAll,
  submitDL,
  getCompletedDlForm,
  finalDLsubmit
} = require("./controllers/dlcontroller");

app.use(json());
app.use(cors());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());


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

authCtrl(app);

app.listen(port, () => {
  console.log(`BEEP Listening on port ${port}`);
});
