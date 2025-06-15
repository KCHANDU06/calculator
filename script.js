let display = document.getElementById('display');
let expression = '';

function press(value) {
  if (display.innerText === '0') display.innerText = '';
  expression += value;
  display.innerText = expression;
}

function calculate() {
  try {
    expression = eval(expression).toString();
    display.innerText = expression;
  } catch {
    display.innerText = "Error";
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  display.innerText = '0';
}
