const answers = ['Answer 1', 'correct answer 2', 'correct answer 1', 'correct answer 1', 'correct answer 1',
  'correct answer 1', 'correct answer 1', 'correct answer 1', 'correct answer 1', 'correct answer 1' ]


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

  if (submit.tagName === 'A') {
    if (submit.innerHTML === answers[0]) {
      console.log('correct')
    } else {
      console.log('incorrect')
    }
  }
}

document.body.addEventListener('mouseover', highlightAnswer)
document.body.addEventListener('mouseout', unHighlightAnswer)
document.body.addEventListener('click', checkAnswer)
const h = document.body.querySelectorAll('a')
console.log(h)
