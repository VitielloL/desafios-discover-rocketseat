const menuMobile = document.querySelector('i.burger-mobile'),
    navList = document.querySelector('ul.nav-list')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('close')
    navList.classList.toggle('active-menu')
})

const sr = new ScrollReveal({
    origin: 'top',
    duration: 500,
    distance: '30px',
    reset: false
})

sr.reveal('.nav', { delay: 0 })
sr.reveal('.nav-logo', { delay: 200 })
sr.reveal('.nav-item', { delay: 400, interval: 100 })
sr.reveal('.nav-form', { delay: 700 })
sr.reveal('.burger-mobile', { delay: 900 })

sr.reveal('.header-title', { delay: 900 })
sr.reveal('.header-description', { delay: 1100 })
sr.reveal('.header-link', { delay: 1300 })
sr.reveal('.header-img', { delay: 1500 })

sr.reveal('.first-post .first-post-image', { delay: 200 })
sr.reveal('.first-post .post-date', { delay: 400 })
sr.reveal('.first-post .post-title', { delay: 600 })
sr.reveal('.first-post .post-description', { delay: 800 })

sr.reveal('.post', { delay: 800, interval: 200 })