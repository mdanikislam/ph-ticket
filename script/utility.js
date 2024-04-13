function setElementValueById(elementId, value){
    document.getElementById(elementId).innerText = value;
}

// get the total price
function totalTicketPrice(Id, value){
    const totalPriceGet = document.getElementById(Id).innerText;
    const totalPrice = parseInt(totalPriceGet);
    const valueGet = parseInt(value);
    const sum = totalPrice + valueGet;
    setElementValueById(Id, sum);
}

// get input value
function getInputValueById(elementId){
    const inputValue = document.getElementById(elementId);
    const input = inputValue.value;
    return input;
}