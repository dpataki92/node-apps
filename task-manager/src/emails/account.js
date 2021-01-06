const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        from: "ptamasdaniel92@gmail.com",
        to: email,
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        from: "ptamasdaniel92@gmail.com",
        to: email,
        subject: `Sorry to see you go, ${name}`,
        text: "I hope to see you back sometime soon."
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}