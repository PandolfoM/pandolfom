const express = require("express");
const router = express.Router();
const contactEmail = require("../models/contactEmail");
require("dotenv").config();

router.post("/submitForm", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(req.body);
  const mail = {
    from: "Portfolio Contact Form<matt@pandolfo.com>",
    to: process.env.EMAIL,
    subject: "",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;
