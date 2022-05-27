const request = require('supertest');
const { app, pool } = require('./server');

afterAll(() => {
    // Clear the database
    pool.end(); // Close the DB connection
});

// Testing with async/await
test('GET /api/filter returns 404 when there is no filter', async () => {
    const response = await request(app)
        .get('/api/filter')
        .expect(404)
});

//postman-ban meg kéne nézni, hogy hogy kell szűrni, és az alapján megírni
//mysql datetime formátumban 
//12 sor szerint queriben
/* test('GET /api/filter returns the filtered output', async () => {
    const response = await request(app)
        .get('/api/filter')
        .expect(404)
        .expect('Content-Type', /json/);

    expect(response.body[0].what).toBe('pee');
}); */