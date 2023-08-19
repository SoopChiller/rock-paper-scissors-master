function hideContent() {
  return document.querySelector('section').style.display = 'none';
};


function rockVsPaperHide() {
  document.getElementById('rock-vs-paper').style.cssText = `
  display: none;
  `
  play();
};

function showRules() {

 const back = document.querySelector('body').style.background = '#FFF';

 const hide =  document.querySelector('main').style.display = 'none';

 const show = document.getElementById('rules-container').style.cssText = `
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 90px;
 `;

 const rulesText = document.getElementById('rules-text').style.cssText = `
 color: #3B4262;
 font-family: Barlow Semi Condensed;
 font-size: 2rem;
 font-style: normal;
 font-weight: 700;
 line-height: 2rem;
 `;

 const exit = document.getElementById('exit-button').style.cssText = `
 background: none;
 border: none;
 fill: #3B4262;
 opacity: 0.90;
 width: 1.19325rem;
 height: 1.19325rem;
 flex-shrink: 0;
 cursor: pointer;
 `;
};

function hideRules() {
  const back = document.querySelector('body').style.background =  'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))';
  const hide = document.getElementById('rules-container').style.display = 'none';
  const show = document.querySelector('main').style.display = 'flex';
};

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
  };

  return computerSelection;
};


function getPlayerSelection(choice) {
  
  const rock = document.getElementsByClassName('.rock-button');
  const paper = document.getElementsByClassName('.paper-button');
  const scissor = document.getElementsByClassName('.scissor-button');
  
  if(rock) {
    return choice;
  } else if(paper) {
    return choice;
  } else if(scissor) {
    return choice;
  };
};


function rockVsPaper() {
  const gap = document.querySelector('main').style.gap = '215px';

  const rVp = document.getElementById('rock-vs-paper').style.cssText = `
  color: #FFF;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.20);
  font-family: Barlow Semi Condensed;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem; 
  letter-spacing: 0.11719rem;
  display: flex;
  text-align: center;
  position: relative;
  `;

  const lose = document.getElementById("player-rock-loser").style.cssText = `
  position: absolute;
  top: -9.2rem;
  width: 136px;
  left: -10rem;
  `;

  const win = document.getElementById("computer-paper-winner").style.cssText = `
  position: absolute;
  top: -9.2rem;
  width: 136px;
  right: -10rem;
  `;
  
  document.getElementById('you-lose').style.cssText = `
  position: absolute;
  top: 5rem;
  left: -7.3rem;
  white-space: nowrap;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.20);
  font-family: Barlow Semi Condensed;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;
  
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
      rockVsPaper();
    } else if(computerChoice === 'scissor') {
      hideContent();
    } else if(computerChoice === 'rock') {
      hideContent();
    }
  }
  console.log(playerChoice, computerChoice)
};

