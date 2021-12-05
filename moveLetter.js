const letter = document.querySelectorAll('.move-letter')


letter.forEach(lett => 
lett.addEventListener('mouseover',function letterPush(e) {

    const w = lett.offsetWidth;
    const h = lett.offsetHeight;
    const centerX = lett.offsetLeft + w/3;
    const centerY = lett.offsetTop + h/3;
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    const x = ((1) * mouseY - h/4).toFixed(2)
    const y = ((-1) * mouseX - w/4).toFixed(2)
   
    lett.style.transform = `rotateX(${x * 2.5}deg) rotateY(${y * 2.5}deg) translate(${x}px, ${y}px)`
    setTimeout(() => {
        lett.style.transform = `rotateX(0) rotateY(0) translate(0px, 0px)`
    }, 250)
}))

