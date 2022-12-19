/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { CountNotification } from 'src/application/use-cases/count-recipient-notifications';
import { GetNotification } from 'src/application/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-models';

@Controller('notifications')
export class NotificatonsController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountNotification,
    private getNotifications: GetNotification
  ){}

  @Patch(':id/cancel')
  async cancel(@Param('id') id:string){
    await this.cancelNotification.execute({notificationId: id})
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId:string){
    const {count} = await this.countRecipientNotifications.execute({
      recipientId
    })
    return {count}
  }

  @Get('/from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId:string){
    const {notifications} = await this.getNotifications.execute({
      recipientId
    })
    return {notifications: notifications.map(NotificationViewModel.toHTTP)}
  }

  @Patch(':id/read')
  async read(@Param('id') id:string){
    await this.readNotification.execute({notificationId: id})
  }

  @Patch(':id/unread')
  async unread(@Param('id') id:string){
    await this.unreadNotification.execute({notificationId: id})
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const {notification} = await this.sendNotification.execute({
        recipientId,
        content,
        category
    });

    return {notification: NotificationViewModel.toHTTP(notification) }
  }
}