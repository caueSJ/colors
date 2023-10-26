// Array with all colors available in Open Color (OC) palette.
const colorsArray = ['blue','cyan','grape','gray','green','indigo','lime','orange','pink','red','teal','violet','yellow'];

/**
 * Generates and returns a random number between 0 and maxValue.
 * @param {Number} maxValue Maximum random value that can be "drawn".
 * @returns {Number} Random number respecting the maximum value informed.
 */
const _getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
}

/**
 * Get a random number between 0 and 255 (maximum allowed for RGB colors).
 * @returns {Number} Returns a random number to be used as value for R, G and B.
 */
const _getRandomRGBValue = () => {
  return _getRandomNumber(256);
}

/**
 * Creates a random value between "0deg" and "360deg".
 * @returns {String} Returns a random number to be used as a degree angle for a linear-gradient color.
 */
const _getRandomAngle = () => {
  return `${_getRandomNumber(361)}deg`;
}

/**
 * Creates random color in rgb() format.
 * @returns {'rgb(number, number, number)'} String for color in rgb() format.
 */
const getRandomColorRGB = () => {
  return `rgb(${_getRandomRGBValue()}, ${_getRandomRGBValue()}, ${_getRandomRGBValue()})`;
}

/**
 * Creates a random two-colors gradient with a random angle.
 * @returns {'linear-gradient(string, color, color)'} Returns an linear-gradient string to be used as the background.
 */
const getRandomGradientColor = () => {
  return `linear-gradient(${_getRandomAngle()}, ${getRandomColorRGB()}, ${getRandomColorRGB()})`;
}

/**
 * Creates a random var for color (relative to variables in _colors.css file).
 * @returns {'var(--string-number)'} String of random var color (colorVar). Colors based on Open Colors (OC).
 */
const getRandomVarColor = () => {
  const index = _getRandomNumber(colorsArray.length - 1);
  return `var(--${colorsArray[index]}-${_getRandomNumber(10)})`;
}

/**
 * Creates a random two-colors based on OC-Colors gradient with a random angle.
 * @returns {'linear-gradient(string, colorVar, colorVar)'}
 */
const getRandomGradientOC = () => {
  return `linear-gradient(${_getRandomAngle()}, ${getRandomVarColor()}, ${getRandomVarColor()})`;
}