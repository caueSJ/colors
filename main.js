// const block = document.createElement('div');
const main = document.querySelector('.main');
const button = document.querySelector('.btn-change-color');
const versionList = document.querySelector('#versionList');
const changeBackgroundButton = document.querySelector('#changeBackgroundButton');
const backButton = document.querySelector('#backButton');

/**
 * Generates and returns a random number between 0 and maxValue.
 * @param {Number} maxValue Maximum random value that can be "drawn".
 * @returns {Number}
 */
const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
}

/**
 * Get a random number between 0 and 255 (maximum allowed for RGB colors).
 * @returns {Number} Returns a random number to be used as value for R, G and B.
 */
const getRandomRGBValue = () => {
  return getRandomNumber(255);
}

/**
 * Get a random value between "0deg" and "360deg".
 * @returns {Number} Returns a random number to be used as a degree angle for a linear-gradient color.
 */
const getRandomAngle = () => {
  return `${getRandomNumber(360)}deg`;
}

const getRandomColorRGB = () => {
  return `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
}

/**
 * Creates a random two-colors gradient with a random angle.
 * @returns {String} Returns an linear-gradient string to be used as the background.
 */
const getRandomGradientColor = () => {
  return `linear-gradient(${getRandomAngle()}, ${getRandomColorRGB()}, ${getRandomColorRGB()})`;
}

/**
 * Change some colors.
 *
 * Version 1: Solid colors (only one color).
 * Version 2: Gradient colors (two-colors gradients).
 */
const changeColor = (version) => {
  switch (version) {
    case 1:
      main.style.backgroundColor = getRandomColorRGB();
      button.style.backgroundColor = getRandomColorRGB();
      button.style.color = button.style.borderColor = getRandomColorRGB();
      break;
    case 2:
      main.style.background = getRandomGradientColor();
      button.style.background = getRandomGradientColor();
      break;
    default:
      break;
  }
}

const show = (...elements) => {
  elements.forEach(element => {
    element.classList.remove('hide');
  });
}

const hide = (...elements) => {
  elements.forEach(element => {
    element.classList.add('hide');
  });
}

const resetColors = () => {
  main.removeAttribute('style');
  button.removeAttribute('style');
}

/**
 * Update elements in page showing or hiding them.
 * @param {Boolean} reset 
 * @returns {void}
 */
const updateView = (reset = false) => {
  if (reset) {
    resetColors();
    hide(changeBackgroundButton, backButton);
    show(versionList);
    return;
  } else {
    hide(versionList);
    show(changeBackgroundButton, backButton);
    changeBackgroundButton.dataset.
  }
}