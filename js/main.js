// scoreboard
let n = 0

// will bring forth answers when you mouse over them
function highlightAnswer (e) {
  e.preventDefault()

  if (e.target.tagName === 'A') {
    e.target.parentElement.classList.add('selectedAnswer')
  }
}

// when you hover off the answer it'll put them back into place
function unHighlightAnswer (e) {
  e.preventDefault()

  if (e.target.tagName === 'A') {
    e.target.parentElement.classList.remove('selectedAnswer')
  }
}

// when an answer is clicked this will check to see if its correct, each correct answer has a data-value assigned to it
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
      const rightAnswer = (submit.parentElement.parentElement.querySelector('[data-value]'))
      rightAnswer.parentElement.classList.add('correct')

      // code below is an idea to make wrong answers dissapear
      // submit.parentElement.parentElement.parentElement.classList.add('hide')
    }
  }
}

document.body.addEventListener('mouseover', highlightAnswer)
document.body.addEventListener('mouseout', unHighlightAnswer)
document.body.addEventListener('click', checkAnswer)
