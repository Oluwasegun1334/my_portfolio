let running
let centisec = 0
let sec = 0
let min = 0

function start(){
    running = true
    stopwatch()
}

function reset(){
    running = false
    centisec = 0
    sec = 0
    min = 0
    stopwatch()
}

function pause(){
    running = false
    stopwatch()
}
function stopwatch(){


    if (running){
        centisec ++
        if(centisec > 100){
            sec ++
            centisec = 0
        }
        if(sec > 60){
            min ++
            sec = 0
        }
    }

    document.querySelector(`h1`).innerHTML = (`${min}:${sec}.${centisec}`)
}

setInterval(stopwatch, 10)
