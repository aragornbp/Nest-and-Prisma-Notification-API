/* eslint-disable prettier/prettier */

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountNotification } from './count-recipient-notifications';
import { makeNotification } from '../../../test/factories/notification-factory';

describe('Count recipients notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countNotification = new CountNotification(notificationsRepository);

    await notificationsRepository.create(makeNotification({recipientId: 'example-recepiente-id-one'}));
    await notificationsRepository.create(makeNotification({recipientId: 'example-recepiente-id-one'}));
    await notificationsRepository.create(makeNotification({recipientId: 'example-recepiente-id-two'}));

    const { count } = await countNotification.execute({
      recipientId: 'example-recepiente-id-one',
    });
    expect(count).toEqual(2);
  });
});
