const card = document.querySelectorAll('.portfolio-deck');



function openingNight() {
    card.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('theater')
            card.classList.add('curtain-closed')
            setTimeout(() => {
                card.classList.remove('curtain-closed')
            }, 1000)
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
    contactCard.classList.remove('border-on');
    contactCardOn.classList.remove('border-on');
    contactCardTwo.classList.remove('border-on');
    contactCardThree.classList.remove('border-on');

    contactCard.style.zIndex = '-1'
    contactCardOn.style.zIndex = '0'

    particleCont.style.top = '0';
    contactCont.style.display = 'block';
    
    window.scrollTo(0,document.body.scrollHeight);
    document.body.style.overflow = 'hidden'
})

contactCardOn.addEventListener('click', () => {
    contactCard.classList.add('border-on');
    contactCardOn.classList.add('border-on');
    contactCardTwo.classList.add('border-on');
    contactCardThree.classList.add('border-on');

    contactCard.style.zIndex = '0'
    contactCardOn.style.zIndex = '-1'

    particleCont.style.top = '-50vh';
    contactCont.style.display = 'none';
    document.body.style.overflow = 'scroll'
})