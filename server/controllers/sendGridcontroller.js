const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: `${process.env.ADMIN_EMAIL}`,
  from: `${process.env.ADMIN_EMAIL}`,
  subject: 'DL Order Confirmation',
  text: 'Sweeeeet! Your order has been received! We will send you another email when you order is fulfilled',
  // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);