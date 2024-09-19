function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return new Promise(() => {});
}

module.exports = getPaymentTokenFromAPI;

