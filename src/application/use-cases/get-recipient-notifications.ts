/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notifications';
import { NotificationsRepository } from '../repositories/notifications-repositories';

interface GetNotificationRequest {
  recipientId: string;
}

interface GetNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetNotificationRequest,
  ): Promise<GetNotificationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipienteId(recipientId);

    return {notifications};
  }
}
