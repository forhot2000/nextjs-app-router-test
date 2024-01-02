// import 'server-only';

import { delay } from './delay';

export const dataProvider = {
  async find(className: string, opts?: any) {
    await delay(2000);
    return {
      data: [
        { id: 1, name: className + '1' },
        { id: 2, name: className + '2' },
        { id: 3, name: className + '3' },
      ],
    };
  },

  async getCollections() {
    await delay(2000);
    return {
      data: [
        { id: 1, name: 'users' },
        { id: 2, name: 'roles' },
        { id: 3, name: 'orgs' },
      ],
    };
  },
};
