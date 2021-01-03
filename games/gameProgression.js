import getRandomNumber from './gameEven.js';

export const rule = 'What number is missing in the progression?';
const getProgression = () => {
  const getArray = () => {
    const counter = getRandomNumber();
    let firstNumber = getRandomNumber();
    const arrProgression = [];
    for (let i = 0; i <= 10; i += 1) {
      arrProgression.push(firstNumber);
      firstNumber += counter;
    }
    return arrProgression;
  };
  const progression = () => {
    const newProgression = getArray();
    newProgression[getRandomNumber(0, 9)] = '..';
    return newProgression;
  };
  return progression().join(' ');
};
export const rightAnswer = (string) => {
  const separator = ' ';
  const numbers = string.split(separator);
  const len = numbers.length;
  let answer;
  for (let j = 0; j <= len; j += 1) {
    if ((numbers[j] === '..' && j <= 1)) {
      answer = Number(numbers[j + 1]) - (Number(numbers[len - 1]) - Number(numbers[len - 2]));
    } else if (numbers[j] === '..') {
      answer = Number(numbers[j - 1]) + Number((numbers[1] - numbers[0]));
    }
  }
  return String(answer);
};
export default getProgression;
