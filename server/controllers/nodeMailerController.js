const nodemailer = require("nodemailer");
const sesTransport = require("nodemailer-ses-transport");
const transporter = nodemailer.createTransport(
  sesTransport({
    accessKeyId: `${process.env.ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`
  })
);

module.exports = {
  sendEmail1: (req, res, next) => {
    // console.log("NODEMAILER >>>>", req.body);
    // console.log(typeof(process.env.ADMIN_EMAIL));
    const { first_name, user_email } = req.body.e;
    transporter
      .sendMail({
        from: process.env.ADMIN_EMAIL,
        to: user_email,
        subject: `${first_name}, Your Zoomie Order Received`,
        text: `Sweeeeet, we received your order, our staff will review your credientials and email you once your order is finalized.`
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  sendEmail2: (req, res, next) => {
    console.log(req.body);
    const { first_name, user_email, message } = req.body;

    transporter
      .sendMail({
        From: `${process.env.ADMIN_EMAIL}`,
        To: user_email,
        subject: `Your Zoomie Order Processed`,
        text: message
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
