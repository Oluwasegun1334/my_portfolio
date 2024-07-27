function time(){
    const now = new Date()
    const hour = now.getHours().toString().padStart(2,0)
    const min = now.getMinutes().toString().padStart(2,0)
    const sec = now.getSeconds().toString().padStart(2,0)

    document.querySelector(`h1`).innerHTML = (`${hour}:${min}:${sec}`)
}

setInterval(time,1000)