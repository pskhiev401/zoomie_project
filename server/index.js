require("dotenv").config();
// **** IMPORT DEPENDENCIES *****
const express = require("express");
const app = express();
const session = require("express-session");
const { json } = require("body-parser");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const cors = require("cors");
const authCtrl = require("./controllers/authcontroller");
const passport = require("passport");

const {getDataAfterLogin,submitDL,getCompletedDlForm,finalDLsubmit} = require("./controllers/dlController");
const {scannedDL} = require('./controllers/dlScanController');
const {getAllOrders} = require('./controllers/admincontroller');

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());
app.use(json());


//**** SESSIONS ****** 
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


//*** PASSPORT ****
app.use(passport.initialize());
app.use(passport.session());


//***** CONNECTION TO DB *******
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

// ***** DL FORM ENDPOINTS *****
app.get("/api/getUserData", getDataAfterLogin);
app.post("/api/dlform", submitDL);
app.get("/api/getdlform", getCompletedDlForm);
app.put("/api/finalDL/:id", finalDLsubmit);

// ****** DL SCAN ENDPOINTS *****
app.post('/api/dlscan', scannedDL )

// ***** ADMIN SIDE ENDPOINTS *****
app.get('/api/getAllOrders', getAllOrders)


//***** AUTH0 CONTROLLER ****
authCtrl(app);

app.listen(port, () => {
  console.log(`BEEP Listening on port ${port}`);
});
