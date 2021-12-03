const card = document.querySelectorAll('.decoration');



function openingNight() {
    card.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('theater')
        })
    })
}

openingNight()