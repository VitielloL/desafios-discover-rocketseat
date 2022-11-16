images = document.querySelectorAll('main .gallery .gallery-photos img'),
selectedImage = document.getElementById('selected-photo'),
nav = document.querySelector('.nav'),
formButton = document.querySelector('.nav .nav-form .nav-form-button'),
formInput = document.querySelector('.nav .nav-form .nav-form-input')

images.forEach(image => {
    image.addEventListener('click', () => {
        selectedImage.src = image.src
    })
})

window.addEventListener('scroll', () => {
    if (scrollY >= 1) {
        nav.classList.add('scroll-nav')
        formButton.classList.add('scroll-item')
        formInput.classList.add('scroll-item')
    }
    else {
        nav.classList.remove('scroll-nav')
        formButton.classList.remove('scroll-item')
        formInput.classList.remove('scroll-item')
    }
})