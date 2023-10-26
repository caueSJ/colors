/**
 * References for this code:
 * https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
 * https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors/9733420#9733420
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */

/** Constants for calculating color luminace */
const RED = 0.2126;
const GREEN = 0.7152;
const BLUE = 0.0722;
const GAMMA = 2.4;

/**
 * Function to extract the values color from string color
 * @param {'rgb(number, number, number)'} rgbColorString String for some color in the format: rgb(number, number, number)
 * @returns {[number, number, number]} Array with values of (R)ed, (G)reen and (B)lue respectively
 */
const _extractRGBValues = (rgbColorString) => {
  return rgbColorString.match(/\d{1,3}/g);
}

/**
 * Calculates color luminance
 * @param {'rgb(number, number, number)'} rgbColorString String for color in rgb() format.
 * @returns {Number} Value of color luminance
 */
const _luminance = (rgbColorString) => {
  const rgbArray = _extractRGBValues(rgbColorString);
  const luminanceArray = rgbArray.map((value) => {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, GAMMA);
  });
  return luminanceArray[0] * RED + luminanceArray[1] * GREEN + luminanceArray[2] * BLUE;
}

/**
 * Function to calculate/test button background color to determine the best text color ("white" or "black").
 * @param {'rgb(number, number, number)'} color String for color in rgb() format.
 * @returns {Number} Color luminance. This value can be in the range of 0 to 1, where 0 is dark colors and 1 light colors.
 */
const checkContrast = (color) => {
  return _luminance(color);
}