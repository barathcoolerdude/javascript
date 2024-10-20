;
function calculate(){
    let count = "";
let operator = "";
let equation= [];
let digits = [];
let j=0

    const input = document.getElementById("input").value;
    console.log(input);

    for(let i = 0; i <= input.length; i++){
        const isnumber = input.charAt(i);
        if (/[0-9]/.test(isnumber)){
            count += isnumber;
            continue;
        }
        else if(operator == "+"||"-"||"*"||"/"){
            if(isnumber == "+"){
                operator = "+";
            }
            else if(isnumber == "-"){
                operator = "-";
            }
            else if(isnumber == "*"){
                operator = "*";
            }
            else if(isnumber == "/"){
                operator = "/";
            }
            else{
                console.log("enter a proper operator");
            }
        }
        
        digits[j]= count;
        console.log(count);
        count = "";
        j++;
    }
    console.log(`digits are ${digits}`)

    for(let k = 0;k < digits.length;k ++){
        console.log(digits[k]);
        if(operator == "+"){
            output.textContent = Number(digits[0])+Number(digits[1]);
        }
        else if(operator == "-"){
            output.textContent = Number(digits[0])-Number(digits[1]);
        }
        else if(operator == "*"){
            output.textContent = Number(digits[0])*Number(digits[1]);
        }
        else if(operator == "/"){
            output.textContent = Number(digits[0])/Number(digits[1]);
        }
        else{
            console.log("this symbol os not found");
        }
    }
}