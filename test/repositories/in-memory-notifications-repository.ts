/* eslint-disable prettier/prettier */
import { Notification } from "../../src/application/entities/notifications"
import { NotificationsRepository } from "../../src/application/repositories/notifications-repositories"



export class InMemoryNotificationsRepository implements NotificationsRepository {
  async findManyByRecipienteId(recipientID: string): Promise<Notification[]> {
    return this.notifications.filter((note)=> note.recipientId === recipientID )
  }
  
  async countManyByRecipienteId(recipientID: any): Promise<number> {
    return this.notifications.filter((note)=> note.recipientId === recipientID ).length
  }
  public notifications: Notification[] = []
  
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find((item)=> item.id === notificationId)

    if(!notification){
      return null
    }
    return notification
  }
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex((item)=> item.id === notification.id)

    if(notificationIndex >= 0){
      this.notifications[notificationIndex] = notification
    }
  }
  
  async create(notification: Notification){
    this.notifications.push(notification)
  }
}