module.exports = {
  fakeTimers: {
    enableGlobally: true,
    doNotFake: ['nextTick'],
    timerLimit: 1000,
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom"
};
