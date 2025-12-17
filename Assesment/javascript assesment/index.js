function getRate(currency) {
    if (currency === "USD") return 1;
    if (currency === "INR") return 83.8;
    if (currency === "EUR") return 0.92;

    return 0;
}

function validate(amount) {
    if (amount === "") return "Please enter amount.";
    if (isNaN(amount)) return "Amount must be a number.";
    if (Number(amount) <= 0) return "Amount must be greater than zero.";
    return "OK";
}

function doConvert() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const msgBox = document.getElementById("msg");
    const resultBox = document.getElementById("result");

    msgBox.innerHTML = "";
    resultBox.innerHTML = "";

    const check = validate(amount);
    if (check !== "OK") {
        msgBox.innerHTML = check;
        return;
    }

    let rateFrom = getRate(from);
    let rateTo = getRate(to);
    let finalValue = (amount * rateTo) / rateFrom;


    resultBox.innerHTML = amount + " " + from + " = " + finalValue+ " " + to;
}
