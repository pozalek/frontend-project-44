import readlineSync from 'readline-sync';
import getRandomNum from '../getRandomNum.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const brainCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const arrLength = 3;
    const randomArrElement = Math.floor(Math.random() * arrLength);

    const randomNumber1 = getRandomNum(15);
    const randomNumber2 = getRandomNum(10);
    const coll = ['+', '-', '*'];

    const sumNum = randomNumber1 + randomNumber2;
    const subtractionNum = randomNumber1 - randomNumber2;
    const multiplicationNum = randomNumber1 * randomNumber2;
    const arr = [sumNum, subtractionNum, multiplicationNum];

    console.log(`Question: ${randomNumber1} ${coll[randomArrElement]} ${randomNumber2}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnsw = Number(userAnswer) === arr[randomArrElement];

    if (correctAnsw) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[randomArrElement]}'. \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;
