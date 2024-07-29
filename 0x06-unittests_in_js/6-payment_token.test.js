const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the object {data: "Successful response from the API"} when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.be.an('object');
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch(done);
  });

  it('should do nothing when success is false', function(done) {
    const promise = getPaymentTokenFromAPI(false);
    setTimeout(() => {
      expect(promise).to.be.a('promise');
      done();
    }, 50);
  });
});

