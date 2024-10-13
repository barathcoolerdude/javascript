//number guessing game

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() *(max-min+1));

console.log(answer)

let attempts= 0
let guess;
let running = true;

while (running){
    guess = window.prompt(`guess a number between ${min} - ${max}`);
    guess = Number(guess);
    attempts++;
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < min || guess > max){
        window.alert(`enter a valid number between ${min}-${max}`)
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("the number id low");
        }
        else if(guess > answer){
            window.alert("the number is high");
        }
        else{
            window.alert(`the guess is correct , you had ${attempts} attempts`);
            running=false;
        }
    }
}
