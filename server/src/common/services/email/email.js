'use strict'

const path = require('path')
const { config } = require('../../../config')
const Email = require('email-templates')

/* smtpTransport.use(
  'compile',
  pugEngine({
    templateDir: path.resolve(__dirname, './templates'),
    pretty: true
  })
) */
/**
 * Send email
 * @param {object} settings
 * @param {callback} callback
 */
/* const send = (settings, callback) => {
  if (
    !settings ||
    !settings.to ||
    !settings.subject ||
    !settings.template ||
    !settings.ctx
  ) {
    return callback(new Error('Missing parameters!'), false)
  }
  const mailOptions = {
    from: `Almibar <${config.emailAddress}>`,
    to: settings.to,
    subject: settings.subject,
    template: settings.template,
    ctx: settings.ctx
  }
  console.log(mailOptions)
  smtpTransport.sendMail(mailOptions, (err, response) => {
    // smtpTransport.close()
    if (!err && response) {
      console.log(response)
      return callback(null, true)
    } else {
      return callback(err, false)
    }
  })
} */
const email = new Email({
  views: {
    root: path.join(__dirname, 'templates')
  },
  message: {
    from: `Almibar <${config.emailAddress}>`
  },
  // uncomment below to send emails in development/test env:
  // send: true,
  transport:
    config.env === 'production'
      ? { // eslint-disable-next-line
          // eslint-disable-next-line
          smtpTransport // eslint-disable-next-line
        }
      : { jsonTransport: true }
})

module.exports = {
  // send,
  send: email.send
}
