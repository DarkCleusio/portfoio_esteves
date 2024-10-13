const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const element = document.querySelectorAll('.hidden')

button.onclick = () => {
  if (mobileNavbar.classList.contains('active')) {
    mobileNavbar.classList.remove('active')
    button.src = "assets/menu.svg"
  } else {
    mobileNavbar.classList.add('active')
    button.src = "assets/close.svg"
  }
}

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

function typwrite(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 85 * i);
  });
}
const animated = document.querySelector('.anime')
typwrite(animated)


const myObser = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

element.forEach((element) => myObser.observe(element))