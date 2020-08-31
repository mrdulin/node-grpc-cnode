module.exports = function () {
  global.__SERVER__.tryShutdown(() => {
    console.log('Test server shutdown');
  });
};
