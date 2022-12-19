/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";


interface CountNotificationRequest {
  recipientId: string;
}

interface CountNotificationResponse {
  count: number;
}

@Injectable()
export class CountNotification {
  constructor(private notificationsRepository: NotificationsRepository){}

  async execute(request: CountNotificationRequest):Promise<CountNotificationResponse>{
    const {recipientId} = request;

    const count = await this.notificationsRepository.countManyByRecipienteId(recipientId)

    return {count}
  }
}