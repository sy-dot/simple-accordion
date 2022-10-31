document.querySelectorAll('.accordion__btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('accordion__btn--active')
  })
})