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

const checkContrast = (color) => {
  const lumin = _luminance(color);
  console.log('lumin', lumin)
  return lumin;
}