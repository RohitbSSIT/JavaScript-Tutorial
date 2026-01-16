const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

/* ===== FLAG UPDATE ===== */
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  if (!countryCode) return;

  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

/* ===== EXCHANGE FUNCTION (MOVE UP HERE) ===== */
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;

  if (amountVal === "" || amountVal < 1) {
    amount.value = "1";
    amountVal = 1;
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = (amountVal * rate).toFixed(2);

  msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

/* ===== POPULATE DROPDOWNS ===== */
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;

    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "INR") option.selected = true;

    select.append(option);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}

/* ===== BUTTON CLICK ===== */
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

/* ===== INITIAL LOAD ===== */
window.addEventListener("load", () => {
  dropdowns.forEach(select => updateFlag(select));
  updateExchangeRate();
});
