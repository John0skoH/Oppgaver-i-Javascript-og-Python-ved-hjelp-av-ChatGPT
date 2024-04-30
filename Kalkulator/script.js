const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function removeLastCharacter(){
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}