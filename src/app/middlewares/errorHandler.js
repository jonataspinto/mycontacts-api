/* eslint-disable no-console */
module.exports = (error, request, response, next) => {
  console.log('#### ERROR HANDLER');
  console.log(error);
  console.log('####');
  response.sendStatus(500);
};
