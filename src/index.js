import colors from "./colors.js";
import randomIntegerFromInterval from './randomInteger.js'

const refs = {
  startBtn: document.querySelector('[data-action = "start"]'),
  stopBtn: document.querySelector('[data-action = "stop"]'),
  body: document.querySelector('body'),
  intervalColorId: null,
}

refs.startBtn.addEventListener("click", () => {
  refs.stopBtn.removeAttribute("disabled");
  refs.startBtn.setAttribute("disabled", true);
  refs.intervalColorId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.removeAttribute("disabled");
  refs.stopBtn.setAttribute("disabled", true);
  clearInterval(refs.intervalColorId);
});