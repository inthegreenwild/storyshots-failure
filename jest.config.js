export default {
  verbose: true,
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    "\\.[jt]sx?$": "babel-jest",
  },
};
