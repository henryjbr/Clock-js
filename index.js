var showtime = () => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let sign = document.getElementById('sign')

    let doublenum = (num) => {
        num = num < 10 ? '0' + num : num ;
        return num
    }

    minutes = doublenum(minutes)
    hours = doublenum(hours)

    if(hours >= 12) {
       sign.innerHTML = hours + ':' + minutes + ' PM'
    } else {
       sign.innerHTML = hours + ':' + minutes + ' AM'
    }
}

setInterval(showtime, 1000)

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let counter = document.getElementById('counter')
trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('light')
    body.classList.toggle('light')
    counter.classList.toggle('light')
})