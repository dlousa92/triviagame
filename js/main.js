let n = 0

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

function checkAnswer (e) {
  e.preventDefault()

  const submit = e.target
  const score = document.body.querySelector('.score')

  if (submit.tagName === 'A') {
    if (submit.dataset.value === 'correct') {
      submit.parentElement.classList.add('correct')
      score.innerHTML = 'Score: ' + (n += 1)
    } else {
      submit.parentElement.classList.add('incorrect')
    }
  }
}

document.body.addEventListener('mouseover', highlightAnswer)
document.body.addEventListener('mouseout', unHighlightAnswer)
document.body.addEventListener('click', checkAnswer)
