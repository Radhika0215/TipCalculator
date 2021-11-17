
// Selects all the range sliders and on changing the slider values calcluate function is called
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});

// On changing the bill field value calculate function is called
const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);

// Calculate the values
function calculateTip(){

    // selects the values of field and parseFloat is used to convert to string if needed and returns floating point number. 
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    // specifies the no. of decimals
    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);
    
    // Returns the text content of the specific element and its descendants.
    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}
//calculate function is called
calculateTip();