document.addEventListener("DOMContentLoaded",() => {
    console.log("content loaded")
})


const ulMenu = document.querySelector('.list-group')
const poster = document.querySelector('img')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const showtime = document.querySelector('#showTime')
const availableTickets = document.querySelector('#availableTickets')

function getfilms(data){
        title.innerText = data.title
        description.innerText = data.description
        showtime.innerText = data.showtime
        let remainingTick = data.capacity - data.tickets_sold
        availableTickets.innerText = remainingTick
            poster.src = data.poster 
}

fetch("http://localhost:3000/films/")
    .then(res => res.json())
    .then(data => {
        data.forEach((film) => {
        const li = document.createElement('li')
        li.innerText = film.title
        ulMenu.appendChild(li)

        li.addEventListener('click', () => {
            getfilms(film)
        })
        })
            })


fetch("http://localhost:3000/films/1")
    .then(res => res.json())
    .then(data => {
            getfilms(data) 
            })

            