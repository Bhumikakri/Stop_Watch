let btn1 = document.querySelector(".start");
let btn2 = document.querySelector(".resate")
let btn3 = document.querySelector(".stop");
let Audio = document.querySelector("audio");
let interval;

btn1.addEventListener("click", ()=>{
    // stopWatch();
    // Audio.play();

    interval = setInterval(watchTime,10);
})

btn3.addEventListener("click", ()=>{
    // console.log(interval);
    Audio.play();

    clearInterval(interval);
})

let milisecond = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timers = document.getElementById('timer');

// function stopWatch(){
//     return setInterval(watchTime, 1000);
// }

function watchTime(){
    milisecond++;
    if(milisecond === 100){
        Audio.play();
        seconds+=1 ;
        milisecond = 0;
        if(seconds === 60){
            minutes=minutes+1;
            Audio.play();
            seconds = 0;
            if(minutes === 60){
                hours=hours+1;
                Audio.play();
                minutes = 0;
            }
        }
    }

    timers.innerText =`${hours} hr : ${minutes} min : ${seconds} sec : ${milisecond} ms`;
}

btn2.addEventListener('click', ()=>{
    clearInterval(interval);
    Audio.play();

    milisecond = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    timers.innerText =`${hours} hr : ${minutes} min : ${seconds} sec : ${milisecond} ms`;
})


// let newme = setInterval(watchTime, 1000);

// function stop(){
//     clearInterval(newme);

// } 
