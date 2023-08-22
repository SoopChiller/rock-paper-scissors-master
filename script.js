window.onload = () => {
  return displayScore();
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
 
 function play(playerChoice, computerChoice) {
   if(localStorage.getItem('score') >= 5) {
    localStorage.setItem('score', 0);
   }

   if(playerChoice === 'rock') {
     if(computerChoice === 'paper') {
       hideContent();
       rockVsPaperLose();
     } else if(computerChoice === 'scissor') {
       hideContent();
       rockVsScissorWin();
       increment();
     } else if(computerChoice === 'rock') {
       hideContent();
       rockVsRockTie();
     }
   } else if(playerChoice === 'paper') {
      if(computerChoice === 'scissor') {
        hideContent();
        paperVsScissorLose();
      } else if(computerChoice === 'rock') {
        hideContent();
        paperVsRockWin();
        increment();
      } else if(computerChoice === 'paper') {
        hideContent();
        paperVsPaperTie();
      }
   } else if(playerChoice === 'scissor') {
      if(computerChoice === 'rock') {
      hideContent();
      scissorVsRockLose();
    } else if(computerChoice === 'paper') {
      hideContent();
      scissorVsPaperWin()
      increment();
    } else if(computerChoice === 'scissor') {
      hideContent();
      scissorVsScissorTie()
    }
   }
   
   
   console.log(playerChoice, computerChoice)
 };

function hideRules() {
  const back = document.querySelector('body').style.background =  'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))';
  const hide = document.getElementById('rules-container').style.display = 'none';
  const show = document.querySelector('main').style.display = 'flex';
};

function displayScore() {
  if(localStorage.getItem('score') >= 5) {
    localStorage.setItem('score', 0);
   }; 
  document.getElementById('score').innerHTML = localStorage.getItem('score');
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

function increment() {

  let score = +(localStorage.getItem("score") || 0); 
  score += 1;
  localStorage.setItem("score", score);

  document.getElementById('score').innerHTML = score;
};

function hideContent() {
  return document.querySelector('section').style.display = 'none';
};

function rockVsScissorWin() {
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="rock-vs-paper">
      <div id="player-rock-winner">
        <img  class="rock-img" src="images/rock.svg" alt="hand-in-rock-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-scissor-loser">
        <img class="scissor=img-img" src="images/scissor.svg" alt="hand-in-scissor-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-win">YOU WIN</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('rock-vs-paper').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-rock-winner").style.cssText = 
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

  const win = document.getElementById("computer-scissor-loser").style.cssText = 
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
  
  document.getElementById('you-win').style.cssText = 
  `
  width: 218px;
  left: -6.2rem;
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

function rockVsRockTie() {
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="rock-vs-rock">
      <div id="player-rock-tie">
        <img  class="rock-img" src="images/rock.svg" alt="hand-in-rock-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-rock-tie">
        <img class="rock-img" src="images/rock.svg" alt="hand-in-rock-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-tie">YOU TIE</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('rock-vs-rock').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-rock-tie").style.cssText = 
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

  const win = document.getElementById("computer-rock-tie").style.cssText = 
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
  
  document.getElementById('you-tie').style.cssText = 
  `
  width: 218px;
  left: -5.8rem;
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


function paperVsScissorLose() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="paper-vs-scissor">
      <div id="player-paper-loser">
        <img  class="paper-img" src="images/paper.svg" alt="hand-in-paper-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-scissor-winner">
        <img class="scissor-img" src="images/scissor.svg" alt="hand-in-scissor-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-lose">YOU LOSE</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('paper-vs-scissor').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-paper-loser").style.cssText = 
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

  const win = document.getElementById("computer-scissor-winner").style.cssText = 
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


function paperVsRockWin() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="paper-vs-rock">
      <div id="player-paper-winner">
        <img  class="paper-img" src="images/paper.svg" alt="hand-in-paper-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-rock-loser">
        <img class="rock-img" src="images/rock.svg" alt="hand-in-rock-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-win">YOU WIN</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('paper-vs-rock').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-paper-winner").style.cssText = 
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

  const win = document.getElementById("computer-rock-loser").style.cssText = 
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
  
  document.getElementById('you-win').style.cssText = 
  `
  width: 218px;
  left: -6.2rem;
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


function paperVsPaperTie() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="paper-vs-paper">
      <div id="player-paper-tie">
        <img  class="paper-img" src="images/paper.svg" alt="hand-in-paper-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-paper-tie">
        <img class="paper-img" src="images/paper.svg" alt="hand-in-paper-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-tie">YOU TIE</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('paper-vs-paper').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-paper-tie").style.cssText = 
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

  const win = document.getElementById("computer-paper-tie").style.cssText = 
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
  
  document.getElementById('you-tie').style.cssText = 
  `
  width: 218px;
  left: -5.8rem;
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

function scissorVsRockLose() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="scissor-vs-rock">
      <div id="player-scissor-loser">
        <img  class="scissor-img" src="images/scissor.svg" alt="hand-in-scissor-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-rock-winner">
        <img class="rock-img" src="images/rock.svg" alt="hand-in-rock-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-lose">YOU LOSE</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('scissor-vs-rock').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-scissor-loser").style.cssText = 
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

  const win = document.getElementById("computer-rock-winner").style.cssText = 
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


function scissorVsPaperWin() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="scissor-vs-paper">
      <div id="player-scissor-winner">
        <img  class="scissor-img" src="images/scissor.svg" alt="hand-in-scissor-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-paper-loser">
        <img class="paper-img" src="images/paper.svg" alt="hand-in-paper-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-win">YOU WIN</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('scissor-vs-paper').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-scissor-winner").style.cssText = 
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

  const win = document.getElementById("computer-paper-loser").style.cssText = 
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
  
  document.getElementById('you-win').style.cssText = 
  `
  width: 218px;
  left: -6.2rem;
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

function scissorVsScissorTie() {
  
  const header = document.querySelector('header');

  header.insertAdjacentHTML('afterend', 
  `
    <div id="scissor-vs-scissor">
      <div id="player-scissor-tie">
        <img  class="scissor-img" src="images/scissor.svg" alt="hand-in-scissor-formation">
        <span class="pick" id="you-picked">YOU PICKED</span>
      </div>
      <div id="computer-scissor-tie">
        <img class="scissor-img" src="images/scissor.svg" alt="hand-in-paper-formation">
        <span style="white-space: nowrap;" class="pick" id="computer-picked">THE HOUSE PICKED</span>
      </div>
      <span id="you-tie">YOU TIE</span>
      <button onclick="location.replace(location.href);" id="play-again-button">PLAY AGAIN</button>
    </div>
  `);

  const relative = document.getElementById('scissor-vs-scissor').style.position = 'relative';
  const gap = document.querySelector('main').style.gap = '215px';

  const lose = document.getElementById("player-scissor-tie").style.cssText = 
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

  const win = document.getElementById("computer-scissor-tie").style.cssText = 
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
  
  document.getElementById('you-tie').style.cssText = 
  `
  width: 218px;
  left: -5.8rem;
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
