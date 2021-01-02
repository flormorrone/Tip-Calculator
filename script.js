function calculateTip() {

    var bill = document.getElementById("bill").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var people = document.getElementById("people").value;

    console.log(bill);
    console.log(serviceQual);
    console.log(people);

    if (bill === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }

    if (people === "" || people <= 1) {
        people = 1;
    }

    var total = ((bill * serviceQual) / people);

    //redondeo
    total = Math.round(total * 100) / 100;

    //2 digitos decimales
    total = total.toFixed(2);

    document.getElementById("bottomtip").innerHTML = total;

};

document.getElementById("calculate").onclick = function() {
    calculateTip();
};