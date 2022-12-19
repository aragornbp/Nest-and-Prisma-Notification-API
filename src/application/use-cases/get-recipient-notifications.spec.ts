/* eslint-disable prettier/prettier */

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';
import { GetNotification } from './get-recipient-notifications';

describe('Get recipients notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getNotification = new GetNotification(notificationsRepository);

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recepiente-id-one' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recepiente-id-one' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recepiente-id-two' }),
    );

    const { notifications } = await getNotification.execute({
      recipientId: 'example-recepiente-id-one',
    });
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recepiente-id-one' }),
        expect.objectContaining({ recipientId: 'example-recepiente-id-one' }),
      ]),
    );
  });
});
