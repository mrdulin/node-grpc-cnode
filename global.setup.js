const { createServer } = require('./src/server');

module.exports = async () => {
  const server = createServer();
  global.__SERVER__ = server;
};
