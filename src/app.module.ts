import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailingModule } from './mailing/mailing.module';
import { ConfigModule } from '@nestjs/config';
import { hours, ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath: '.env'
      }
    ),
    ThrottlerModule.forRoot(
      {
        errorMessage: 'Muitas requisições. Por favor, tente novamente mais tarde.',
        throttlers: [
          {
            ttl: hours(1),
            limit: 3
          }
        ]
      }
    ),
    MailingModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: ThrottlerGuard
    },
    AppService
  ],
})
export class AppModule { }
