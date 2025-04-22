const rSlider = document.getElementById('rSlider')
const gSlider = document.getElementById('gSlider')
const bSlider = document.getElementById('bSlider')

function updateColorBox(r, g, b) {
  const rgb = `rgb(${r}, ${g}, ${b})`
  document.getElementById('colorBox').style.backgroundColor = rgb
  document.getElementById('rgbCode').textContent = rgb
}

function updateFromSlider() {
  const r = rSlider.value
  const g = gSlider.value
  const b = bSlider.value
  updateColorBox(r, g, b)
}

function generateColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  rSlider.value = r
  gSlider.value = g
  bSlider.value = b
  updateColorBox(r, g, b)
}

function copyColorCode() {
  const rgb = document.getElementById('rgbCode').textContent
  navigator.clipboard.writeText(rgb)
}
