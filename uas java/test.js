const request = require('supertest');
const app = require('../server');

describe('Category API', () => {
  it('should create a new category', async () => {
    const res = await request(app)
      .post('/categories')
      .send({ name: 'Electronics' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Electronics');
  });
});
