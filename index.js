let elapsedTime = 0;
let isRunning = false;
let startTime = 0;


function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update , 10);
        isRunning = true;
    }
}

function stop(){
    clearInterval(timer);
    isRunning = false;
}

function reset(){
    display.textContent = `00:00:00:00`;
    isRunning = false;

}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours =Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes =Math.floor( elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milisecond = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2 , "0");
    minutes = String(minutes).padStart(2 , "0");
    seconds = String(seconds).padStart(2 , "0");
    milisecond = String(milisecond).padStart(2 , "0");
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milisecond}`
}