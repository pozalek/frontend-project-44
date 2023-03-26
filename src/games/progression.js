import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionLength = getRandomNumber(4, 9);
  let randomNumber = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(2, 5);
  const coll = [randomNumber];

  for (let i = 0; i < progressionLength; i += 1) {
    coll.push(randomNumber += progressionStep);
  } return coll;
};

const generateRoundData = () => {
  const arr = getProgression();
  const hiddenElement = getRandomNumber(0, arr.length - 1);
  const answer = String(arr[hiddenElement]);
  arr[hiddenElement] = '..';

  const question = arr.join(' ');

  return [question, answer];
};

const startProgressionGame = () => {
  startGame(gameTask, generateRoundData);
};

export default startProgressionGame;
