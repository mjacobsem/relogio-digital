// RELOGIO DIGITAL
function data() {
    let dataAtual = new Date();
    const day = dataAtual.getDate();
    const month = dataAtual.getMonth() + 1;
    const year = dataAtual.getFullYear();
    const dayFormatted = `${day}/${month}/${year}`
    document.getElementById('date').innerText = dayFormatted;
}
data()

function horario() {
    setInterval(() => {
            let dataAtual = new Date();
            const hours = dataAtual.getHours().toString().padStart(2, '0');
            const minutes = dataAtual.getMinutes().toString().padStart(2, '0');
            const seconds = dataAtual.getSeconds().toString().padStart(2, '0');
            const formattedTime = `${hours} : ${minutes} : ${seconds}`
            document.getElementById('time').innerText = formattedTime
    }, 1000);
}
horario()

// TIMER
document.getElementById('time-button').addEventListener('click', function(){
    document.getElementById('container-clock').style.display = 'block';
    document.getElementById('container-timer').style.display = 'none';
})
document.getElementById('timer-button').addEventListener('click', function(){
    document.getElementById('container-clock').style.display = 'none';
    document.getElementById('container-timer').style.display = 'block';
})

let timerInterval;
let timerSeconds = 0;

document.getElementById('start-timer').addEventListener('click', function(){
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timerSeconds++
            const hours = String(Math.floor(timerSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor(timerSeconds % 3600 / 60)).padStart(2, '0');
            const seconds = String(timerSeconds % 60).padStart(2, '0');
            document.getElementById('timer').innerText = `${hours} : ${minutes} : ${seconds}`
        }, 1000)
    }
})

document.getElementById('stop-timer').addEventListener('click', function(){
    clearInterval(timerInterval)
    timerInterval = null;
});

document.getElementById('zerar-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    document.getElementById('timer').innerText = '00 : 00 : 00';
});