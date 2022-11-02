module.exports = {
  preset: "vite-jest",
  testMatch: [
    "**/src/**/*.spec.ts?(x)",
    "**/src/*.spec.ts?(x)",
    "**/__tests__/*.ts?(x)",
  ],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
};
