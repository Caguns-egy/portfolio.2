const secondtext = document.getElementById('secondtext')
    textfunction=()=>{
    setTimeout(()=>{
        secondtext.innerHTML="Freelancer"
    },0)
    setTimeout(()=>{
        secondtext.innerHTML="Fron-end"
    },4000)
}
textfunction()
setInterval(textfunction,8000)
const menuHambuger = document.getElementById("menu")
const navLinks = document.querySelector(".nav-links")
menuHambuger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

