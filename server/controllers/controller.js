const nodemailer = require('nodemailer')
const {EMAIL, PASSWORD} = process.env

module.exports = {
    email: async (req, res) => {
        const {name, email: otherEmail, subject, text} = req.body
        console.log(req.body)
        try {
            let transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                  user: EMAIL,
                  pass: PASSWORD
                }
                // secure: false,
                // tls: {rejectUnauthorized: false},
                // debug: true
              });
              let info = await transporter.sendMail({
                from: `melissaknowles@live.com`, 
                to: EMAIL,
                subject: subject, 
                text: text, 
                html: `<div>${text}<div> 
                      <img src="cid:unique@nodemailer.com"/>`
              }, (err, res) => {
                if (err) {
                  console.log('err', err)
                } else {
                  console.log('res', res)
                  res.status(200).send(info)
                }
              })
            } catch (err) {
              console.log(err)
              res.sendStatus(500)
            }
        }
    }
