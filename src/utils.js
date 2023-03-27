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
