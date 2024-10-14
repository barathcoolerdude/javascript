const textBox= document.getElementById("textBox");
const result = document.getElementById("result");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcious = document.getElementById("toCelcious");

let temp=0;
function convert(){

    if(toFahrenheit.checked){
        temp=Number(textBox.value);
        temp = (textBox*9/5) + 32;
        return;
    }
    else if(toCelcious){
        temp=Number(textBox.value);
        temp = (textBox-32) * 5/9;
        result.textContent=temp.toFixed(2);
    }
    else{
        result.textContent = "please select a unit";
    }
}