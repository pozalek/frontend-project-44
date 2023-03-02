import readlineSync from 'readline-sync';
import getRandomNum from '../getRandomNum.js';

const evenNumber = (number) => (number % 2) === 0;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const parityGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNum(100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnsw = evenNumber(randomNumber) ? 'yes' : 'no';
    const isAnswCorrect = userAnswer === correctAnsw;

    if (isAnswCorrect) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'. \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default parityGame;
