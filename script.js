const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach((el) => {
    // Read text from contentEditable element
    const value = parseFloat(el.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Show total in element with id="ans"
  const ans = document.getElementById("ans");
  ans.textContent = total;
};


getSumBtn.addEventListener("click", getSum);

