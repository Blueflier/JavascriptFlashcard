


// Get the flashcard elements
const flashcard1 = document.getElementById('flashcard1');
const flashcard2 = document.getElementById('flashcard2');
let answer = 0;
// Set up the initial question
setNewQuestion();

// Add event listeners to the flashcards after setting up the question
flashcard1.addEventListener('click', () => handleCardClick(flashcard1));
flashcard2.addEventListener('click', () => handleCardClick(flashcard2));

// Function to set a new question
function setNewQuestion() {
  const operands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const operand1 = operands[Math.floor(Math.random() * operands.length)];
  const operand2 = operands[Math.floor(Math.random() * operands.length)];
  const correctAnswer = operand1 + operand2;
  answer = correctAnswer;

  document.getElementById('question').textContent = `What is ${operand1} + ${operand2}?`;

  // Randomly assign the correct answer to one of the flashcards
  const correctCard = Math.random() < 0.5 ? flashcard1 : flashcard2;
  const incorrectCard = correctCard === flashcard1 ? flashcard2 : flashcard1;

  correctCard.textContent = correctAnswer;
  incorrectCard.textContent = generateRandomNumber(correctAnswer);
}

// Function to handle card click
function handleCardClick(clickedCard) {
  // Check if the clicked card contains the correct answer
  // alert(parseInt(clickedCard.textContent) );
  //alert(answer);
  if (parseInt(clickedCard.textContent) === answer) {
    document.getElementById('result').textContent = 'Correct!';

    // You can add score logic here
  } else {
    alert('Incorrect. Try again!');
  }

  // Set a new question after each click
  setNewQuestion();

}

// Function to generate a random number that is not the correct answer
function generateRandomNumber(correctAnswer) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 20); // Change this range as needed
  } while (randomNumber === correctAnswer);
  return randomNumber;
}

