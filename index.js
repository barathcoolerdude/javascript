const textBox= document.getElementById("textBox");
const result = document.getElementById("result");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcious = document.getElementById("toCelcious");

let temp;
function convert(){

    if(toFahrenheit.checked){
        temp=Number(textBox.value);
        temp = (temp*9/5) + 32;
        result.textContent = temp.toFixed(2)+"F"
    }
    else if(toCelcious){
        temp=Number(textBox.value);
        temp = (temp-32) * 5/9;
        result.textContent=temp.toFixed(2)+"C";
    }
    else{
        result.textContent = "please select a unit";
    }
}









