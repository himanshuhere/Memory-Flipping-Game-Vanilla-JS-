const cards = document.querySelectorAll('.memory-card');

let alreadyFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
var count = 0;
var totalcount = 0;


function flipCard() {
  
  
  if (lockBoard) return;
  // flipping card here
  // pre condition check
  if (this === firstCard) return;

  this.classList.add('flip');

// CHECK WETHER   card is already flipped or not
  if (!alreadyFlipped) {

    // first click flip
    alreadyFlipped = true;
    firstCard = this;

    return;
  }

  
 // second click flip
    secondCard = this;

    checkIfMatchOrNot();    // check
      
       if(count >= 6){
        alert("WOW!! You've played very well."+"\n"+"You've completed in total"+" "+totalcount+" "+"turns."+"\n"+"SCORE : "+totalcount);
        setTimeout(function(){
          history.go(0);
        },1500);          // refresh page after 3 sec
       }
       
}



function checkIfMatchOrNot()  // function to check match
 {
  totalcount++;
  if(firstCard.dataset.framework === secondCard.dataset.framework)
  {
    count++;
    disableCards();

  }
  else
  {
    unflipCardsBack();
  }
}

function disableCards() {

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetCardBoard();
}

function unflipCardsBack() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetCardBoard();
  }, 1300);
}
function resetCardBoard(){
    alreadyFlipped = false;
    lockBoard = false;
    firstCardm = true;
    secondCard = true;

}
/*
es6====
function resetCardBoard() {
  [alreadyFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
*/

(function shufflecCard()   // instatiate first
 {
  cards.forEach(card => {
    let anyRandomPosWght = Math.floor(Math.random() * 12);
    card.style.order = anyRandomPosWght;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
