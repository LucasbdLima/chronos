let cron
let h1 = document.querySelector("h1")

function start() {

    let value = 0

    cron = setInterval(() => {
        value++
        h1.innerHTML = value
    }, 500); //1 segundo
}

function stop() {
    clearInterval(cron)
}

function reset(){

    clearInterval(cron)
    h1.innerHTML ="0" 
}