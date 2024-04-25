// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

//menu stuff
const hb = document.querySelector('#hamburgerBtn')
const pw = document.querySelector('#pageWrapper')

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver')
})


//castle data
import {castles} from '../data/castles.js'

const castleCards = document.querySelector('#cards')

castles.forEach(castle => {
    const mySection = document.createElement('section')
    
    const theImage = document.createElement('img')
    theImage.src = `/images/${castle.photo}`
    theImage.alt = castle.name
    theImage.width = 450
    theImage.height = 300

    const theName = document.createElement('h2')
    theName.textContent = castle.name

    const theAddress = document.createElement('address')
    theAddress.innerHTML = `${castle.address[0]}<br>${castle.address[1]}`

    const thePhone = document.createElement("a")
    thePhone.textContent = castle.phone
    thePhone.href = `tel:${castle.phone}`

    mySection.appendChild(theImage)
    mySection.appendChild(theName)
    mySection.appendChild(theAddress)
    mySection.appendChild(thePhone)
    castleCards.appendChild(mySection)
})