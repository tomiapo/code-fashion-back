const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const generateEmailHTML = () => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Coding Fashion",
      link: "http://localhost:3000",
    },
  });

  const email = {
    body: {
      greeting: "Coding Fasion - Confirmación de compra",
      signature: "Gracias por su compra",
      intro: "Le enviamos este correo como confirmación de su compra",
      action: {
        instructions:
          "Para ver el detalle de la misma, haga click en el siguiente link:",
        button: {
          color: "#4B0082",
          text: "Revisar compra",
          link: "http://localhost:3000",
        },
      },
      outro:
        "Ante cualquier inconveniente, contactenos a traves de nuestro sitio web.",
    },
  };

  const emailHTML = mailGenerator.generate(email);
  const emailPlainText = mailGenerator.generatePlaintext(email);
  return { emailHTML, emailPlainText };
};

const sendConfirmationEmail = async (recipientEmail) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USEREMAIL,
      pass: process.env.PASSWORD,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: "coding-fashion@gmail.com",
    to: `${recipientEmail}`,
    subject: "Code-fashion: Confirmacion de compra",
    text: generateEmailHTML().emailPlainText,
    html: generateEmailHTML().emailHTML,
  };

  transporter.sendMail(mailOptions, (err, data) => {});
};

module.exports = sendConfirmationEmail;
