const main = document.querySelector('.main');
const button = document.querySelector('.btn-change-color');
const versionList = document.querySelector('#versionList');
const changeBackgroundButton = document.querySelector('#changeBackgroundButton');
const backButton = document.querySelector('#backButton');

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
  // const boxShadow = '6px 6px var(--gray-0)';
  // const lightColor = 'var(--gray-0)';
  switch (version) {
    case 1:
      main.style.backgroundColor = getRandomColorRGB();
      updateButtonStyle(version);
      break;
    case 2:
      main.style.background = button.style.background = getRandomGradientColor();
      updateButtonStyle(version);
      break;
    case 3:
      main.style.background = button.style.background = getRandomGradientOC();
      updateButtonStyle(version);
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
function resetColors() {
  main.removeAttribute('style');
  button.removeAttribute('style');
}

/**
 * Update "Change Color Now!" button style
 * @param {Number} version
 * @returns {void}
 */
function updateButtonStyle(version) {
  const lightColor = 'var(--gray-0)';
  const color = getRandomColorRGB();
  const textColor = checkContrast(color) > 0.7 ? 'var(--gray-8)' : '#FFFFFF';

  button.style.color = lightColor;
  button.style.boxShadow = `6px 6px ${getRandomColorRGB()}`;

  if (version == 1) {
    button.style.backgroundColor = color;
    button.style.color = textColor;
  }
}

/**
 * Update elements in page.
 * @param {Number} version
 * @returns {void}
 */
function updateView(version) {
  hide(versionList);
  show(changeBackgroundButton, backButton);
  changeBackgroundButton.dataset.version = version; // Update button "data-version" attribute
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