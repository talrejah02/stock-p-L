const purchase = document.querySelector("#purchased");
const current = document.querySelector("#current");
const quantity = document.querySelector("#quantity");
const btn = document.querySelector("#btn");

function Calculate() {
  if (current.value && purchase.value > 0) {
    if (current.value > purchase.value) {
      var profit = (current.value - purchase.value) * quantity.value;
      var profitPer = (profit / purchase.value) * 100;
      outputMessage(
        `Profit is Rs.${profit} and Profit Percentage is ${profitPer.toFixed(2)}%`
      );
    } else if (current.value < purchase.value) {
      var loss = (purchase.value - current.value) * quantity.value;
      var lossPer = (loss / purchase.value) * 100;
      outputMessage(`Loss is Rs.${loss} and Loss Percentage is ${lossPer}%`);
    }
  } else {
    outputMessage(`please Enter values!!`);
  }
}
function outputMessage(msg) {
  response.innerText = msg;
}

btn.addEventListener("click", Calculate);
