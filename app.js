const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=>{
userChoice=e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerCohoice()
getResult()
}))
function generateComputerCohoice() {
    const randomNumber =Math.floor(Math.random() *3) +1
    if (randomNumber === 1) {
        computerChoice = 'Pedra'

    }
    if (randomNumber === 2) {
        computerChoice = 'Papel'
        
    }
    if (randomNumber === 3) {
        computerChoice = 'Tesoura'
        
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
      result='É um empate'  
    }
    if (computerChoice ==='Pedra' && userChoice==='Papel') {
        result='Você venceu'  
      }
      if (computerChoice ==='Pedra' && userChoice==='Tesoura') {
        result='Você perdeu'  
      }
      if (computerChoice ==='Papel' && userChoice==='Tesoura') {
        result='Você venceu'  
      }
      if (computerChoice ==='Papel' && userChoice==='Pedra') {
        result='Você perdeu'  
      }
      if (computerChoice ==='Tesoura' && userChoice==='Pedra') {
        result='Você venceu'  
      }
      if (computerChoice ==='Tesoura' && userChoice==='Papel') {
        result='Você perdeu'  
      }
      resultDisplay.innerHTML=result
}