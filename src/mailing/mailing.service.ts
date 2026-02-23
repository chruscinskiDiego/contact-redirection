import { Injectable } from '@nestjs/common';
import { CreateMailingDto } from './dto/create-mailing.dto';
import nodemailer, { Transporter } from 'nodemailer';

@Injectable()
export class MailingService {

  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: (process.env.GMAIL_APP_PASSWORD || '')
      },
    });
  }

  async newRedirection(createMailingDto: CreateMailingDto) {

    const email = await this.transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'Nova mensagem de contato | Site Diego Chruscinski',
      text: `Nome: ${createMailingDto.name}\nEmail: ${createMailingDto.email}\nTelefone: ${createMailingDto.phone}\nMensagem: ${createMailingDto.message}`
    });

    return {
      message: 'Mensagem enviada com sucesso!',
      emailId: email.messageId
    };

  }

}
