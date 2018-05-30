
function selectAnswer (e) {
  e.preventDefault()

  const answer = e.target
  if (answer.tagName === 'A') {
    answer.parentElement.style.background = 'green'
  }
}

document.body.addEventListener('click', selectAnswer)
