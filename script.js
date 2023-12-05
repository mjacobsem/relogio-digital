const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

setInterval(() => {
    const actualDate = new Date();
    
    hours.innerHTML = actualDate.getHours()
    minutes.innerHTML = actualDate.getMinutes()
    seconds.innerHTML = actualDate.getSeconds()
},1000)
