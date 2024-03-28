//data

const data = {
  count: 0,
};

// DOM
const dom = {
  display: document.getElementById('display'),
  increment: document.getElementById('increment'),
  decrement: document.getElementById('decrement'),
  reset: document.getElementById('reset'),
};

// Handler
const updateDisplay = () => {
  dom.display.innerText = data.count;
};

// Events
dom.increment.addEventListener('click', () => {
  data.count += 1;
  updateDisplay();
});

dom.decrement.addEventListener('click', () => {
  data.count -= 1;
  updateDisplay();
});

dom.reset.addEventListener('click', () => {
  data.count = 0;
  updateDisplay();
});
