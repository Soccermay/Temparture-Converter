let fahrenheit = document.getElementById('fahrenheit');
let celsuis = document.getElementById('celsuis');
let kelvin = document.getElementById('kelvin');

function Calc() {
    fahrenheit.oninput = function() { 
        let Celsuis = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
        celsuis.value = parseFloat(Celsuis.toFixed(2)); 

        let Kelvin = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273;
        kelvin.value = parseFloat(Kelvin.toFixed(2));
    }
}

Calc();

function Calc1() {
celsuis.oninput = function() {
        let fahrenheit = (parseFloat(celsuis.value) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(fahrenheit.toFixed(2));

        let Kelvin = (parseFloat(celsuis.value) + 273);
        kelvin.value = parseFloat(kelvin.toFixed(2));
    }     
}

Calc1();


function Calc2() {
kelvin.oninput = function () {
        let fahrenheit = (parseFloat(kelvin.value) - 273) * 9 / 5 + 32;
        fahrenheit.value = parseFloat(fahrenheit.toFixed(2));

        let celsuis = (parseFloat(kelvin.value) - 273);
        celsuis.value = parseFloat(celsuis.toFixed(2));
    }
}

Calc2();