

function hideContent() {
  return document.querySelector('section').style.display = 'none';
};

function rockVsPaperWin() {

};

function increment() {
  
  
let scores = localStorage.setItem('score', 0);

document.getElementById('score').innerHTML = Number(localStorage.getItem('score') + 1);

  
}

function rockVsPaperLose() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="rock-vs-paper">
      <div id="player-rock-loser">
        <img  class="rock-img" src="images/rock.svg" alt="hand-in-rock-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-paper-winner">
        <img class="paper-img" src="images/paper.svg" alt="hand-in-paper-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-lose">YOU LOSE</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('rock-vs-paper').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-rock-loser").style.cssText = 
  `
  color: #FFF;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.20);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.11719rem;
  position: absolute;
  color: #FFF;
  width: 136px;
  bottom: -3.4rem;
  right: 1.5rem ;
  line-height: 4rem;
  `;

  const win = document.getElementById("computer-paper-winner").style.cssText = 
  `
  line-height: 4rem;
  bottom: -3.4rem;
  left: 1.5rem ;
  color: #FFF;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.20);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.11719rem;
  color: #FFF;
  position: absolute;
  width: 136px;
  `;

  const button = document.getElementById('play-again-button').style.cssText = 
  `
  border-radius: 0.5rem;
  background: linear-gradient(0deg, #F3F3F3 0%, #FFF 100%);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.20);
  width: 220px;
  height: 50px;
  flex-shrink: 0;
  position: absolute;
  color: #3B4262;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.15625rem;
  border: none;
  top: 8rem;
  left: -7rem;
  `;
  
  document.getElementById('you-lose').style.cssText = 
  `
  width: 218px;
  left: -7rem;
  top: 3rem;
  position: absolute;
  color: #FFF;
  white-space: nowrap;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.20);
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;
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

 const rulesText = document.getElementById('rules-text').style.cssText = 
 `
 color: #3B4262;
 font-size: 2rem;
 font-style: normal;
 font-weight: 700;
 line-height: 2rem;
 `;

 const exit = document.getElementById('exit-button').style.cssText = 
 `
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
      rockVsPaperLose();
    } else if(computerChoice === 'scissor') {
      hideContent();
      increment();
    } else if(computerChoice === 'rock') {
      hideContent();
    }
  }

  console.log(localStorage.getItem('score'))
  console.log(playerChoice, computerChoice)
};

