const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', () => {
    it('should return a 200 status code', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
});

describe('Cart Page', () => {
    it('should return a 200 status code when :id is a number', (done) => {
        request.get('http://localhost:7865/cart/123', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return a 404 status code when :id is NOT a number', (done) => {
        request.get('http://localhost:7865/cart/abc', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    it('should return the correct result when :id is a number', (done) => {
        request.get('http://localhost:7865/cart/456', (error, response, body) => {
            expect(body).to.equal('Payment methods for cart 456');
            done();
        });
    });
describe('Available Payments', () => {
    it('should return the correct payment methods', (done) => {
        request.get('http://localhost:7865/available_payments', (error, response, body) => {
            const expected = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expected);
            done();
        });
    });
});

describe('Login', () => {
    it('should return a welcome message with the username', (done) => {
        const options = {
            method: 'POST',
            uri: 'http://localhost:7865/login',
            json: { userName: 'JohnDoe' }
        };
        request(options, (error, response, body) => {
            expect(body).to.equal('Welcome JohnDoe');
            done();
        });
    });

    it('should return a 400 status code with an empty body', (done) => {
        const options = {
            method: 'POST',
            uri: 'http://localhost:7865/login',
            json: {}
        };
        request(options, (error, response, body) => {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
});
