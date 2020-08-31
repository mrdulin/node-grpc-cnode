module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js'],
  verbose: true,
  testMatch: ['**/?(*.)+(spec|test).integration.[jt]s?(x)'],
  globalSetup: './global.setup.js',
  globalTeardown: './global.teardown.js',
};
