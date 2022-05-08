let userName = ''
let userQuestion = ''
let answer = ''



function greeting() {
  randomNumber = Math.floor(Math.random() * 8)
  userName = window.prompt('I am The Magic Eight Ball. Who is it that seeks my wisdom?')
  nameInput = (userName !== '' ? `Hello ${ userName }!` : `Hello!`)
  askQuestion()
}


function askQuestion() {
    let randomNumber = Math.floor(Math.random() * 8)
    let eightBall = ''
  switch (randomNumber) {
    case 0:
      eightBall = 'Do not count on it'
      break
    case 1:
      eightBall = 'It is decidedly so'
      break
    case 2:
      eightBall = 'It is certain'
      break
    case 3:
      eightBall = 'Cannot predict now'
      break
    case 4:
      eightBall = 'Reply hazy try again'
      break
    case 5:
      eightBall = 'My sources say no'
      break
    case 6:
      eightBall = 'Outlook not so good'
      break
    default:
      eightBall = 'Signs point to yes'
      break
  }
  userQuestion = window.prompt(`${ userName } What do you wish to ask The Magic Eight Ball?`, '')

  if (confirm(`To, "${ userQuestion }", The Magic Eight Ball replies...${ eightBall }. Do you dare to go again?!`)) {
    askQuestion()
  } else {
    window.alert(`The Magic Wisdom agknowledges your wisdom. To glimpse the future is to risk madeness while one awaits its arrival.`)
  }

}

greeting()
