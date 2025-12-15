let $buttons = document.querySelectorAll("button");
let ui = document.querySelector(".userEntry");
let finalCalc = document.querySelector(".finalCalc");

let valOne = "";
let valTwo = "";
let operator = "";

$buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    switch (value) {
      case "AC":
        clearDisplay();
        break;

      case "DEL":
        removeNumber();
        break;

      case "+/-":
        makeNegative();
        break;

      case "=":
        makeCalculation();
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        if (valOne === "") return;
        operator = value;
        valTwo = valOne;
        valOne = "";
        finalCalc.textContent = valTwo + " " + operator;
        ui.textContent = "";
        break;

      default:
        valOne += value;
        ui.textContent = valOne;
        break;
    }
  });
});

function clearDisplay() {
  ui.textContent = "";
  finalCalc.textContent = "";
  valOne = "";
  valTwo = "";
  operator = "";
}

function removeNumber() {
  valOne = valOne.slice(0, -1);
  ui.textContent = valOne;
}

function makeNegative() {
  if (valOne === "") return;
  valOne = (parseFloat(valOne) * -1).toString();
  ui.textContent = valOne;
}

function makeCalculation() {
  if (valTwo === "" || valOne === "" || operator === "") {
    alert("Perhitungan belum lengkap!");
    return;
  }

  let result;

  if (operator === "+") result = parseFloat(valTwo) + parseFloat(valOne);
  if (operator === "-") result = parseFloat(valTwo) - parseFloat(valOne);
  if (operator === "*") result = parseFloat(valTwo) * parseFloat(valOne);
  if (operator === "/") result = parseFloat(valTwo) / parseFloat(valOne);

  finalCalc.textContent = result;
  ui.textContent = "";

  valOne = result.toString();
  valTwo = "";
  operator = "";
}
