const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation your acc. on Pinderesd',
            text: '',
            html:
                `
                    <div>
                        <h1>Click on link for confirm your email</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

module.exports = new MailService();