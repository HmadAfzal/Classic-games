let result = document.querySelector('.result');
let userChoice = document.querySelector('.userChoice');
let compChoice = document.querySelector('.compChoice')
let opts = document.querySelectorAll('.opt');

for (const opt of opts) {
    opt.addEventListener("click",()=>{
       let useropt= opt.id
userChoice.innerHTML=useropt
getRand();
res();
})
}

function getRand() {
   let compopt= Math.floor(Math.random()*3)+1;
   if (compopt==1) {
     compChoice.innerHTML='rock'
   }
   if (compopt==2) {
    compChoice.innerHTML='paper'
  }
  if (compopt==3) {
    compChoice.innerHTML='scissors'
  } 
}


function res() {
    if (userChoice.innerHTML===compChoice.innerHTML) {
        result.innerHTML="Draw"
    }
    else if (userChoice.innerHTML=='paper' && compChoice.innerHTML=='rock') {
        result.innerHTML="You won"
    }
    else if (userChoice.innerHTML=='scissors' && compChoice.innerHTML=='rock') {
        result.innerHTML="You lost"
    }
    else if (userChoice.innerHTML=='rock' && compChoice.innerHTML=='paper') {
        result.innerHTML="You lost"
    }
    else if (userChoice.innerHTML=='scissor' && compChoice.innerHTML=='paper') {
        result.innerHTML="You won"
    }
    else if (userChoice.innerHTML=='rock' && compChoice.innerHTML=='scissor') {
        result.innerHTML="You won"
    }
    else if (userChoice.innerHTML=='paper' && compChoice.innerHTML=='scissor') {
        result.innerHTML="You lost"
    }
}
