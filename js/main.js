// scoreboard
let n = 0

// will bring forth answers when you mouse over them
function highlightAnswer (e) {
  e.preventDefault()

  if (e.target.parentElement.tagName === 'LI') {
    e.target.parentElement.classList.add('selectedAnswer')
  }
}

// when you hover off the answer it'll put them back into place
function unHighlightAnswer (e) {
  e.preventDefault()

  if (e.target.parentElement.tagName === 'LI') {
    e.target.parentElement.classList.remove('selectedAnswer')
  }
}

// when an answer is clicked this will check to see if its correct, each correct answer has a data-value assigned to it
function checkAnswer (e) {
  e.preventDefault()

  const target = e.target
  const score = document.body.querySelector('.score')

  if (target.parentElement.tagName === 'LI') {
    if (target.dataset.value === 'correct') {
      target.parentElement.classList.add('correct')
      score.innerHTML = 'Score: ' + (n += 1)
    } else {
      target.parentElement.classList.add('incorrect')
      const rightAnswer = (target.parentElement.parentElement.querySelector('[data-value]'))
      rightAnswer.parentElement.classList.add('correct')
    }
  }
}

function submitScore (e) {
  if (n <= 0) {
    document.body.querySelector('.reallybad').style.zIndex = 3
    document.body.classList.add('game-over')
  } else if (n <= 1) {
    document.body.querySelector('.notbad').style.zIndex = 3
    document.body.classList.add('game-over')
  } else {
    document.body.querySelector('.great').style.zIndex = 3
    document.body.classList.add('game-over')
  }
}

const button = document.body.querySelector('button')

document.body.addEventListener('mouseover', highlightAnswer)
document.body.addEventListener('mouseout', unHighlightAnswer)
document.body.addEventListener('click', checkAnswer)
button.addEventListener('click', submitScore)
