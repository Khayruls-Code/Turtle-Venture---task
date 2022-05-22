const bulb = document.getElementById('bulb')
const onOffText = document.getElementById('onOffText')

bulb.addEventListener('click', () => {
  if (bulb.src.match("off")) {
    bulb.src = "https://i.ibb.co/hsG86NS/on.png";
    onOffText.innerText = 'Light On'
    onOffText.classList.add('lightOn')
    onOffText.classList.remove('lightOff')
  } else {
    bulb.src = "https://i.ibb.co/vLCgmwc/off.png";
    onOffText.innerText = 'Light Off'
    onOffText.classList.add('lightOff')
    onOffText.classList.remove('lightOn')
  }
})