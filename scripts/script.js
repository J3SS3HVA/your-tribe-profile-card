const expandButton = document.querySelector('header button')
const changepfp = document.querySelector('Img')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}



