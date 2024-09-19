const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    calculateNumberStub.restore();
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    calculateNumberStub.restore();
  });
});

