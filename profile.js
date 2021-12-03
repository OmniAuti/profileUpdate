const card = document.querySelectorAll('.portfolio-deck');



function openingNight() {
    card.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('theater')
        })
    })
}

openingNight()



const particleCont = document.getElementById('particles-js')
const contactCont = document.querySelector('.work-together')
const contactCard = document.querySelector('.stuck')
const contactCardOn = document.querySelector('.stuck-on')
const contactCardTwo = document.querySelector('.stack')
const contactCardThree = document.querySelector('.stacked')

contactCard.addEventListener('click', () => {
    contactCard.style.borderRadius = '0'
    contactCardOn.style.borderRadius = '0'
    contactCard.style.zIndex = '-1'
    contactCardOn.style.zIndex = '0'
    contactCardTwo.style.borderRadius = '0'
    contactCardThree.style.borderRadius = '0'
    particleCont.style.top = '0';
    contactCont.style.display = 'block';
    window.scrollTo(0,document.body.scrollHeight);
    document.body.style.overflow = 'hidden'
})

contactCardOn.addEventListener('click', () => {
    contactCard.style.borderRadius = '20px'
    contactCardOn.style.borderRadius = '20px'
    contactCard.style.zIndex = '0'
    contactCardOn.style.zIndex = '-1'
    contactCardTwo.style.borderRadius = '20px'
    contactCardThree.style.borderRadius = '20px'
    particleCont.style.top = '-50vh';
    contactCont.style.display = 'none';
    document.body.style.overflow = 'scroll'
})