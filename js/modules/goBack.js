import introScreen from './intro.js';
import {changeScreen} from '../utils.js';

const goBack = (element) => {
  const backBtn = element.querySelector(`.back`);

  backBtn.addEventListener(`click`, () => {
    changeScreen(introScreen);
  });
};

export default goBack;
