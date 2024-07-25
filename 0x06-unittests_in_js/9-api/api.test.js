const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', () => {
    //... existing tests...
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
});
