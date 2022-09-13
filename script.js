// template_j1kghyg
// service_oroad5d
// iFtzq5jYPrcreQHkM

let isModalOpen = false
let contrastToggle = true
const scaleFactor = 1/20

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (i=0;i<shapes.length;i++){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
        shapes[i].style.transform = `rotate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle
    if (contrastToggle){
        document.body.classList += ' dark-theme'
    }
    else{
        document.body.classList.remove('dark-theme')
    }
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_oroad5d',
            'template_j1kghyg',
            event.target,
            'iFtzq5jYPrcreQHkM'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                'The email service is temporarily down, please contact me at Fahadadsani@gmail.com'
            )
        })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen= false
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = true
    document.body.classList += ' modal__open'
}