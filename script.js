window.addEventListener("load", start);

let secret;

function start() {
  console.log("JavaScript kører!");
  secret = randomNumber();
  document.querySelector("#guessform").addEventListener("submit", receiveInput);
}

function randomNumber() {
  return Math.floor(Math.random()*100);
  return 42;
}

function receiveInput(event) {
  event.preventDefault();
  const form = event.target;
  const guess = form.guess.valueAsNumber;

  const comp = compare(guess,secret);
  if(comp < 0) {
    outputAnswer(`Du gættede på ${guess} - det var for lavt`);
  }  
  if(comp > 0) {
    outputAnswer(`Du gættede på ${guess} - det var for højt`);
  }

  if( comp == 0) {
    outputAnswer(`Du gættede ${guess} og det er korrekt`);
    document.querySelector("#guessform").removeEventListener("submit", receiveInput);
    document.querySelector("#guessform").remove();
  }
}

function compare(guess, secret) {
  return guess-secret;
}

function outputAnswer(text) {
  document.querySelector("#guesses").insertAdjacentHTML("beforeend", `<li>${text}</li>`);
}

function CSSConfetti() {
  
}
