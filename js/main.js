// scoreboard
let n = 0
const score = document.body.querySelector('.score')

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

  if (target.parentElement.tagName === 'LI') {
    if (target.dataset.value === 'correct') {
      target.parentElement.classList.add('correct')
      score.innerText = 'Score: ' + (n += 1)
    } else {
      target.parentElement.classList.add('incorrect')
      const rightAnswer = (target.parentElement.parentElement.querySelector('[data-value]'))
      rightAnswer.parentElement.classList.add('correct')
    }
  }
}

// will display an end game screen based on how user scored during quiz
function submitScore (e) {
  if (n <= 5) {
    document.body.querySelector('.reallybad').style.zIndex = 2
    document.body.classList.add('game-over')
    document.body.scrollTop = document.documentElement.scrollTop = 0
  } else if (n <= 14) {
    document.body.querySelector('.notbad').style.zIndex = 2
    document.body.classList.add('game-over')
    document.body.scrollTop = document.documentElement.scrollTop = 0
  } else {
    document.body.querySelector('.great').style.zIndex = 2
    document.body.classList.add('game-over')
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }
}

// bonus konami code secret I've added to the webpage
const checkKonami = []

const test = 'tenletters1' // string  value serves no purpose other than to check the length of the checkKonami array as 10
const konami = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter'

function konamiCode (e) {
  console.log(e.key)
  checkKonami.push(e.key)
  checkKonami.splice(-test.length - 1, checkKonami.length - test.length)

  if (checkKonami.join('').includes(konami)) {
    const bonus = document.body.querySelector('#konamicode')
    bonus.parentElement.classList.add('correct')
  }
}

// all event listeners listed below
const button = document.body.querySelector('button')

document.body.addEventListener('mouseover', highlightAnswer)
document.body.addEventListener('mouseout', unHighlightAnswer)
document.body.addEventListener('click', checkAnswer)
button.addEventListener('click', submitScore)
window.addEventListener('keyup', konamiCode)
