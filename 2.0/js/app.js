const clock = document.querySelector('.clock')

setInterval(() => {
    let day = new Date()

    let hh = day.getHours()
    let mm = day.getMinutes()
    let se = day.getSeconds()

    clock.innerHTML = `${hh}:${mm}:${se}`
    
})