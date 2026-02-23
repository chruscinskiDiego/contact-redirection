import { Controller, Post, Body } from '@nestjs/common';
import { CreateMailingDto } from './dto/create-mailing.dto';
import { MailingService } from './mailing.service';

@Controller('mailing')
export class MailingController {

  constructor(
    private readonly mailerService: MailingService
  ) { }

  @Post()
  async newRedirection(@Body() createMailingDto: CreateMailingDto) {

    try {

      const result = await this.mailerService.newRedirection(createMailingDto);

      return result;

    } catch (error) {

      console.error('Erro ao enviar email:', error);

      return {
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'
      };

    }
  }

}
