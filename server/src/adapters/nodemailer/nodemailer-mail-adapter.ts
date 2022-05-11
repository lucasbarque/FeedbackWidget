import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1831cdbd41d4c6",
    pass: "a35836e4efe432"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData)  {
     await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Lucas Barque <lucasbarque@gmail.com>',
        subject,
        html: body,
      })
  }
}