// modify the DOM
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// begin request

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {

            // create div to hold cards
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // set title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            // set film description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300) // limit to 300 chars
            p.textContent = `${movie.description}...` // end with ellipses

            // append cards to container element
            container.appendChild(card)

            // each card contains h1 and p
            card.appendChild(h1)
            card.appendChild(p)

        })
    } else {
        console.log('error')
    }
}

request.send()