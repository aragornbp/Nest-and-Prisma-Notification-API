/* eslint-disable prettier/prettier */
import { Notification as RawNotefication } from '@prisma/client'
import { Content } from 'src/application/entities/content';
import { Notification } from '../../../../application/entities/notifications';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotefication): Notification{
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      readAt: raw.readAt,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt
    }, raw.id)
  }
}
