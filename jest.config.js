module.exports = {
  displayName: `react-keyrune`,
  coverageDirectory: `./.coverage/`,
  collectCoverage: true,
  testPathIgnorePatterns: ["/node_modules/", "__MOCKS__"],
  moduleNameMapper:{
    "\\.scss$": `<rootDir>/src/__MOCKS__/styleMock.spec.js`
  }
}
