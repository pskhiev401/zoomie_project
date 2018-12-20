require('dotenv').config();
// **** IMPORT DEPENDENCIES *****
const app = require('express')();
const express = require('express');
// const app = express();
const session = require('express-session');
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const massive = require('massive');
const cors = require('cors');
const authCtrl = require('./controllers/authcontroller');
const passport = require('passport');

const path = require('path');
//*** STRIPE *****
const stripe = require('stripe')(process.env.STRIPE_KEY);

const {
  getDataAfterLogin,
  submitDL,
  getCompletedDlForm,
  finalDLsubmit
} = require('./controllers/dlController');
const { scannedDL } = require('./controllers/dlScanController');
const {
  getAllPending,
  getAllCompleted,
  updateStatus,
  deleteJob
} = require('./controllers/admincontroller');

const {
  sendEmail1,
  sendEmail2
} = require('./controllers/nodeMailerController');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use(json());
app.use(require('body-parser').text());

app.use(express.static(`${__dirname}/../build`));

//**** SESSIONS ****
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

//***** PASSPORT ******
app.use(passport.initialize());
app.use(passport.session());

//***** CONNECTION TO DB *******
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(err));

// ***** DL FORM ENDPOINTS *****
app.get('/api/getUserData', getDataAfterLogin);
app.post('/api/dlform', submitDL);
app.get('/api/getdlform', getCompletedDlForm);
app.put('/api/finalDL/:id', finalDLsubmit);

// ****** DL SCAN ENDPOINTS *****
app.post('/api/dlscan', scannedDL);

// ***** ADMIN SIDE ENDPOINTS *****
app.get('/api/getAllPending', getAllPending);
app.get('/api/getAllCompleted', getAllCompleted);
app.post('/api/updateStatus', updateStatus);
app.delete('/api/deleteJob/:id', deleteJob);

// **** NODEMAILER CONTROLLER ****
app.post('/api/sendEmail1', sendEmail1);
app.post('/api/sendEmail2', sendEmail2);

//***** AUTH0 CONTROLLER *****
authCtrl(app);

//*** STRIPE *****
app.post('/charge', async (req, res) => {
  console.log('hit', req.body);
  try {
    let { status } = await stripe.charges.create({
      amount: 4800, //cents
      currency: 'usd',
      description: 'Zoomie Service Fee',
      source: req.body
    });
    console.log({ status });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`BEEP Listening on port ${port}`);
});
