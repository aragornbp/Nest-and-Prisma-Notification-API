/* eslint-disable prettier/prettier */
import { Content } from "../../src/application/entities/content";
import { Notification, NofificationProps } from "../../src/application/entities/notifications";

type Override = Partial<NofificationProps>

export function makeNotification(override:Override = {} ){
  return new Notification({
    category: 'social',
    content: new Content('nova solicitação de amizade'),
    recipientId: 'example-recepiente-id-two',
    ...override
  })
};