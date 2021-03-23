module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  coverageDirectory: "./tests/_coverage_",
  coveragePathIgnorePatterns: ["/node_modules/"],
};
