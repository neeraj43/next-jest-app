import handler from '@/pages/api/hello';
import { createMocks } from 'node-mocks-http';

describe('/api/hello', () => {
  it('returns a message', async () => {
    const { req, res } = createMocks();
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ message: 'Hello World' });
  });
});