import { getData } from '@/lib/getData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'success' }),
  })
);

describe('getData', () => {
  it('returns data from fetch', async () => {
    const data = await getData();
    expect(data).toEqual({ message: 'success' });
  });
});