const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });

  it('should return an unresolved promise when success is false', (done) => {
    getPaymentTokenFromAPI(false).then(() => {
      expect.fail('Promise should not have been resolved');
    }).catch(() => {
      done();
    });
  });
});
