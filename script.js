const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  // Loop through the NodeList and sum the values
  priceElements.forEach((el) => {
    const value = parseFloat(el.textContent); // extract number
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create new row and cell
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2; // spans across columns if needed
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";
  newRow.appendChild(totalCell);

  // Append the row to the table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

