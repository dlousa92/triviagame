
function selectAnswer (e) {
  e.preventDefault()
  if (e.target.tagName === 'A') {
    console.log('You clicked me')
  }
}

document.body.addEventListener('click', selectAnswer)
