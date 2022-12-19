/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { CountNotification } from 'src/application/use-cases/count-recipient-notifications';
import { GetNotification } from 'src/application/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';
import { DatabaseModule } from 'src/infra/database/dtabase.module';
import { NotificatonsController } from '../controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificatonsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountNotification,
    GetNotification
  ]
})
export class HttpModule {}
