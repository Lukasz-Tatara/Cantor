let enteredValue = document.querySelector(".js-enteredValue");
let formElement = document.querySelector(".js-form__cantor");
let countButton = document.querySelector(".js-button");
let receivedAmount = document.querySelector(".js-received_amount");
let currencyElement = document.querySelector(".js-currencyType");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = enteredValue.value;
    let currency = currencyElement.value;
    let eurValueElement = 4.54;
    let usdValueElement = 3.79;
    let gbpValueElement = 5.22;

    switch (currency) {
        case "EUR":
            result = amount / eurValueElement;
            break;
        case "USD":
            result = amount / usdValueElement;
            break;
        case "GBP":
            result = amount / gbpValueElement;


    }
    receivedAmount.innerText = `${result.toFixed(2)} ${currency}`
});