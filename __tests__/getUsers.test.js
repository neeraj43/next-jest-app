import axios from 'axios';
import { getUsers } from '@/lib/getUsers';

jest.mock('axios');

describe('getUsers', () => {
  it('fetches users from API', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Alice' }] });

    const users = await getUsers();
    expect(users).toEqual([{ id: 1, name: 'Alice' }]);
    expect(axios.get).toHaveBeenCalledWith('/api/users');
  });
});