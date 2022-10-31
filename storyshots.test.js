import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

const getMatchOptions = ({}) => {
  return {
    failureThreshold: 0,
  };
};

initStoryshots({
  framework: "vue3",
  suite: "avr",
  framework: "vue3",
  test: imageSnapshot({
    getMatchOptions,
  }),
});
