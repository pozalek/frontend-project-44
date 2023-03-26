// export const getRandomNumber = (max) => Math.ceil(Math.random() * max);

// export default getRandomNum;

// export const getRandomNumber = (min, max) => {
//   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// };

export function getRandomNumber(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export const getGCD = (x, y) => {
  if (y > x) {
    return getGCD(y, x);
  } if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

export const isPrimeNumber = (n) => {
  if (n < 2) {
    return 'Число должно быть больше 1!';
  } if (n === 2) {
    return 'yes';
  }

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export const getProgression = () => {
  const progressionLength = getRandomNumber(4, 9);
  let randomNumber = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(2, 5);
  const coll = [randomNumber];

  for (let i = 0; i < progressionLength; i += 1) {
    coll.push(randomNumber += progressionStep);
  } return coll;
};
