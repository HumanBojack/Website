import { browser } from '$app/environment';

const colorsLightnesses = {
  "primary": 70,
  "secondary": 38,
  "background": 23,
  "neutral": 23,
  "contrast": 80,
  "muted": 74,
  "text": 70
}

const getCurrentColors = () => {
  let colorCodes = {}
  if (browser) {
    let colors = Object.keys(colorsLightnesses)
    colors.forEach((color) => {
      colorCodes[color] = window.getComputedStyle(document.body).getPropertyValue(`--${color}`)
    })
  }

  return colorCodes
}

const setRandomTheme = () => {
  Object.entries(colorsLightnesses).forEach(([color, lightness]) => {
    let hue = Math.floor(Math.random() * 360)
    let saturation = Math.floor(Math.random() * 101)
    document.body.style.setProperty(`--${color}`, `hsl(${hue} ${saturation}% ${lightness}%)`)
  })
};

const saveColorTheme = () => {
  let theme = getCurrentColors();
  // TODO: save the current theme in localStorage
  console.log("saving theme", theme)
}

const resetColorTheme = () => {
  // TODO: reset local storage
  // TODO: force page reload
  location.reload()
  return
}

export {
  setRandomTheme,
  saveColorTheme,
  resetColorTheme,
}
