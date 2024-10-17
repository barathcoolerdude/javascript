//random password generator

let randomstring = "";

function generatePassword(){

    const UpperCase = document.getElementById("upperCase");
    const includeUpperCase = UpperCase.checked;
    const LowerCase = document.getElementById("lowerCase");
    const includeLowerCase = LowerCase.checked;
    const Numbers = document.getElementById("numbers");
    const includeNumbers = Numbers.checked;
    const Symbols = document.getElementById("symbols");
    const includeSymbols = Symbols.checked;
    const length = document.getElementById("length").value;

    const lowercaseChars= "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars= "0123456789";
    const symbolChars = "@#$%^&"

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase ? lowercaseChars :"e";
    console.log(includeLowerCase);
    allowedChar += includeUpperCase ? uppercaseChars :"e";
    console.log(includeUpperCase);
    allowedChar += includeNumbers ? numberChars :"e";
    console.log(includeNumbers);
    allowedChar += includeSymbols ? symbolChars :"e";
    console.log(includeSymbols);

    //console.log(allowedChar);
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        //console.log(randomIndex);
        password += allowedChar[randomIndex];
    }

    console.log(password);

    document.getElementById("result").textContent = password;

}

    
    


