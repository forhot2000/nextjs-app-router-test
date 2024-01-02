import 'server-only';

import { delay } from './delay';

export const dataProvider = {
  async getCollections() {
    await delay(100);
    return {
      data: [
        { id: 1, name: 'users' },
        { id: 2, name: 'roles' },
        { id: 3, name: 'orgs' },
      ],
    };
  },
};
