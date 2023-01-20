//// DOM ELEMENTS ////

// buttons
const rhaenyraBio = document.getElementById('rhaenyra-bio')
const rhaenyraStatus = document.getElementById('rhaenyra-status')
const alicentBio = document.getElementById('alicent-bio')
const alicentStatus = document.getElementById('alicent-status')
const viserysBio = document.getElementById('viserys-bio')
const viserysStatus = document.getElementById('viserys-status')
const daemonBio = document.getElementById('daemon-bio')
const daemonStatus = document.getElementById('daemon-status')
const laenorBio = document.getElementById('laenor-bio')
const laenorStatus = document.getElementById('laenor-status')
const laenaBio = document.getElementById('laena-bio')
const laenaStatus = document.getElementById('laena-status')

// displays
const rhaenyraInfo = document.getElementById('rhaenyra-info')
const alicentInfo = document.getElementById('alicent-info')
const viserysInfo = document.getElementById('viserys-info')
const daemonInfo = document.getElementById('daemon-info')
const laenorInfo = document.getElementById('laenor-info')
const laenaInfo = document.getElementById('laena-info')

//// EVENT LISTENERS ////

rhaenyraBio.addEventListener('click', () => {
    rhaenyraInfo.innerText = "Rhaenyra is the daughter and only surviving child of King Viserys I and Aemma Arryn. She rides the dragon Syrax."
})
rhaenyraStatus.addEventListener('click', () => {
    rhaenyraInfo.innerText = "Alive"
})
alicentBio.addEventListener('click', () => {
    alicentInfo.innerText = "Rhaenyra is the daughter and only surviving child of King Viserys I and Aemma Arryn. She rides the dragon Syrax."
})
alicentStatus.addEventListener('click', () => {
    alicentInfo.innerText = "Alive"
})
viserysBio.addEventListener('click', () => {
    viserysInfo.innerText = "King Viserys I Targaryen, remembered as Viserys the Peaceful, was the fifth king of the Targaryen dynasty to rule the Seven Kingdoms. Viserys I was the grandson of Jaehaerys I Targaryen, and father of Rhaenyra. He briefly rode Balerion the Black Dread in his youth before the dragon's death of old age."
})
viserysStatus.addEventListener('click', () => {
    viserysInfo.innerText = "Deceased"
})
daemonBio.addEventListener('click', () => {
    daemonInfo.innerText = "Prince Daemon Targaryen is a prince of the Targaryen dynasty, and the younger brother of King Viserys I Targaryen. He is the uncle of Queen Rhaenyra Targaryen, and later becomes her second husband and king consort.He is a peerless warrior, and also a dragonrider: his mount is Caraxes, the Blood Wyrm."
})
daemonStatus.addEventListener('click', () => {
    daemonInfo.innerText = "Alive"
})
laenorBio.addEventListener('click', () => {
    laenorInfo.innerText = "Ser Laenor Velaryon is the son of Corlys Velaryon and Rhaenys Targaryen, and the presumed deceased former heir to Driftmark. He once rode the dragon Seasmoke."
})
laenorStatus.addEventListener('click', () => {
    laenorInfo.innerText = "Alive"
})
laenaBio.addEventListener('click', () => {
    laenaInfo.innerText = "Lady Laena Velaryon was the daughter of Corlys Velaryon and Rhaenys Targaryen and the sister of Laenor Velaryon. She was the rider of the dragon Vhagar."
})
laenaStatus.addEventListener('click', () => {
    laenaInfo.innerText = "Deceased"
})