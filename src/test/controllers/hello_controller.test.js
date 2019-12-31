const request = require('supertest');
const app = require('../../config/server')

describe('HelloController', () => {
  it('should work get', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
  });
});
