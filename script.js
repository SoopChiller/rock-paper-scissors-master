function hideContent() {
  return document.querySelector('main').style.display = 'none';
}

function showRules() {

 const back = document.querySelector('body').style.background = '#FFF';

 const hide =  document.querySelector('main').style.display = 'none';

 const show = document.getElementById('rules-container').style.cssText = `
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 90px;
 `

 const rulesText = document.getElementById('rules-text').style.cssText = `
 color: #3B4262;
 font-family: Barlow Semi Condensed;
 font-size: 2rem;
 font-style: normal;
 font-weight: 700;
 line-height: 2rem;
 `

 const exit = document.getElementById('exit-button').style.cssText = `
 background: none;
 border: none;
 fill: #3B4262;
 opacity: 0.90;
 width: 1.19325rem;
 height: 1.19325rem;
 flex-shrink: 0;
 cursor: pointer;
 `
};

function hideRules() {
  const back = document.querySelector('body').style.background =  'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))';
  const hide = document.getElementById('rules-container').style.display = 'none';
  const show = document.querySelector('main').style.display = 'flex';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

function getComputerSelection() {
 let computerSelection = getRandomInt(0, 2);
  if(computerSelection === 0) {
    computerSelection = 'rock';
  } else if(computerSelection === 1) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissor';
  }

  return computerSelection;
};


function getPlayerSelection(choice) {
  
  const rock = document.getElementsByClassName('.rock-button');
  const paper = document.getElementsByClassName('.paper-button');
  const scissor = document.getElementsByClassName('.scissor-button')
  
  if(rock) {
    return choice;
  } else if(paper) {
    return choice;
  } else if(scissor) {
    return choice;
  }
};

 

function play(playerChoice, computerChoice, score) {
  // const outcomes = {
  //   'rock': { 'scissor': 'win', 'paper': 'lose', 'rock': 'tie' },
  //   'paper': { 'rock': 'win', 'scissor': 'lose', 'paper': 'tie' },
  //   'scissor': { 'paper': 'win', 'rock': 'lose', 'scissor': 'tie' }
  // };
  // const outcome = outcomes[playerChoice][computerChoice];

  if(playerChoice === 'rock') {
    if(computerChoice === 'paper') {
      hideContent();
    }
  }
  console.log(playerChoice, computerChoice)
}

