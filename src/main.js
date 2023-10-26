const main = document.querySelector('.main');
const button = document.querySelector('.btn-change-color');
const versionList = document.querySelector('#versionList');
const changeBackgroundButton = document.querySelector('#changeBackgroundButton');
const backButton = document.querySelector('#backButton');
const colorsArray = ['blue','cyan','grape','gray','green','indigo','lime','orange','pink','red','teal','violet','yellow'];

// Set all events after load DOM content.
document.addEventListener('DOMContentLoaded', setEventListeners(), false);

function setEventListeners() {
  // Set events for version list items.
  document.querySelectorAll('li').forEach(versionItem => {
    versionItem.addEventListener('click', function(){ updateView(versionItem.id) });
  });
  changeBackgroundButton.addEventListener('click', changeColor);
  backButton.addEventListener('click', resetView);
}

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
  return getRandomNumber(256);
}

/**
 * Get a random value between "0deg" and "360deg".
 * @returns {Number} Returns a random number to be used as a degree angle for a linear-gradient color.
 */
const getRandomAngle = () => {
  return `${getRandomNumber(361)}deg`;
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

const getRandomVarColor = () => {
  const index = getRandomNumber(colorsArray.length - 1);
  return `var(--${colorsArray[index]}-${getRandomNumber(10)})`;
}

const getRandomGradientOC = () => {
  return `linear-gradient(${getRandomAngle()}, ${getRandomVarColor()}, ${getRandomVarColor()})`;
}

const changeButtonStyle = () => {
  const color = getRandomColorRGB();
  const textColor = checkContrast(color) > 0.7 ? 'var(--gray-8)' : '#FFFFFF';
  button.style.backgroundColor = color;
  button.style.color = textColor;
  button.style.boxShadow = `6px 6px ${getRandomColorRGB()}`;
}

/**
 * Change some colors based on changeBackgroundButton data-attribute value.
 *
 * Version 1: Solid colors (single color).
 * 
 * Version 2: Gradient colors (two-colors gradients).
 * 
 * Version 3: Gradient colors with Open Colors scheme (two-colors gradients).
 */
function changeColor() {
  const version = +changeBackgroundButton.dataset.version;
  const boxShadow = '6px 6px var(--gray-0)';
  const lightColor = 'var(--gray-0)';
  switch (version) {
    case 1:
      main.style.backgroundColor = getRandomColorRGB();
      changeButtonStyle();
      break;
    case 2:
      main.style.background = button.style.background = getRandomGradientColor();
      button.style.color = lightColor;
      button.style.boxShadow = boxShadow;
      break;
    case 3:
      main.style.background = button.style.background = getRandomGradientOC();
      button.style.color = lightColor;
      button.style.boxShadow = boxShadow;
      break;
    default:
      alert('Invalid Version :(');
      break;
  }
}

/**
 * Show one or more elements.
 * @param  {...HTMLElement} elements List of elements to show.
 */
function show(...elements) {
  elements.forEach(element => {
    element.classList.remove('hide');
  });
}

/**
 * Hide one or more elements.
 * @param  {...any} elements List of elements to hide.
 * @returns {void}
 */
function hide(...elements) {
  elements.forEach(element => {
    element.classList.add('hide');
  });
}

/**
 * Reset colors when click in "Back" button.
 * @returns {void}
 */
const resetColors = () => {
  main.removeAttribute('style');
  button.removeAttribute('style');
}

/**
 * Update elements in page.
 * @param {Number} version
 * @returns {void}
 */
function updateView(version) {
  hide(versionList);
  show(changeBackgroundButton, backButton);
  changeBackgroundButton.dataset.version = version; // Update buttons "data-version" attribute
}

/**
 * Resets the UI to the initial state (default colors and elements visible).
 * Function called by "Back" button.
 * @returns {void}
 */
function resetView() {
  resetColors();
  hide(changeBackgroundButton, backButton);
  show(versionList);
}