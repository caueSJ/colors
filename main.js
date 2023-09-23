// const block = document.createElement('div');
const main = document.querySelector('.main');
const button = document.querySelector('.btn-change-color');
const versionList = document.querySelector('#versionList');
const changeBackgroundButton = document.querySelector('#changeBackgroundButton');
const backButton = document.querySelector('#backButton');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 255);
}

const getRandomColorRGB = () => {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

const changeColor = () => {
  main.style.backgroundColor = getRandomColorRGB();
  button.style.backgroundColor = getRandomColorRGB();
  button.style.color = button.style.borderColor = getRandomColorRGB();
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

const updateView = (version) => {
  if (version > 0) {
    hide(versionList);
    show(changeBackgroundButton, backButton);
  } else {
    resetColors();
    hide(changeBackgroundButton, backButton);
    show(versionList);
  }
}