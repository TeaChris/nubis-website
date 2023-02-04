// change nav style on scroll
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
    nav.classList.toggle('window-scrolled', window.scrollY > 0)
})

// responsive navbar
const navLinks = document.querySelector('.links')
const openNavBtn = document.getElementById('openNav')
const closeNavBtn = document.getElementById('closeNav')

const openNav = () => {
    navLinks.style.display = 'flex'
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    navLinks.style.display = 'none'
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click', closeNav)

// close nav menu on click of menu links
if(document.body.clientWidth < 1024) {
    navLinks.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', closeNav)
    })
}