import engineGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameTask = 'What number is missing in the progression?';

const getRandomArbitrary = (min, max) => Math.ceil(Math.random() * (max - min) + min);

const progression = () => {
  const progressionLength = getRandomArbitrary(5, 9);
  let randomNumber = getRandomNum(50);
  const progressionStep = getRandomArbitrary(2, 5);
  const arr = [randomNumber];

  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(randomNumber += progressionStep);
  } return arr;
};

const gameLogic = () => {
  const arr = progression();
  // console.log(arr);
  const hiddenElement = getRandomArbitrary(0, arr.length - 1);
  const answer = String(arr[hiddenElement]);
  arr[hiddenElement] = '..';

  const question = arr.join(' ');

  return [question, answer];
};

const brainProgression = () => {
  engineGame(gameTask, gameLogic);
};

export default brainProgression;
