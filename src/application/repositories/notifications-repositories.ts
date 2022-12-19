/* eslint-disable prettier/prettier */
import { Notification } from '../entities/notifications';

export abstract class NotificationsRepository {
  
  abstract create(notification: Notification): Promise<void>;
  
  abstract findById(notificationId: string): Promise<Notification | null>;

  abstract save(notification: Notification): Promise<void>

  abstract countManyByRecipienteId(recipientID: string): Promise<number>

  abstract findManyByRecipienteId(recipientID: string): Promise<Notification[]>
}
