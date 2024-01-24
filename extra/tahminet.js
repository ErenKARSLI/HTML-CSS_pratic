const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    message.textContent = "Please enter a valid number between 1 and 10.";
  } else {
    attempts++;

    if (userGuess === targetNumber) {
      message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
      disableInputAndButton();
    } else {
      message.textContent = `Incorrect guess. Try again.`;
    }
  }
}

function disableInputAndButton() {
  const guessInput = document.getElementById("guessInput");
  const submitButton = document.querySelector("button");

  guessInput.disabled = true;
  submitButton.disabled = true;
}
