function highlightAnswer (e) {
  e.preventDefault()

  if (e.target.tagName === 'A') {
    e.target.parentElement.classList.add('selectedAnswer')
  }
}

function unHighlightAnswer (e) {
  e.preventDefault()

  if (e.target.tagName === 'A') {
    e.target.parentElement.classList.remove('selectedAnswer')
  }
}

document.body.addEventListener('mouseover', highlightAnswer)
document.body.addEventListener('mouseout', unHighlightAnswer)

const submit = document.body.getElementsByTagName('button')
console.log(submit)
