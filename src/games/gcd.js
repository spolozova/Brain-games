import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';

export const RULE = 'Find the greatest common divisor of given numbers.';
export default () => {
  const pair = cons(getRandomNumber(), getRandomNumber());
  return `${car(pair)} ${cdr(pair)}`;
};
export const rightAnswer = (string) => {
  const separator = ' ';
  const numbers = string.split(separator);
  const firstNum = Number(numbers[0]);
  const secondNum = Number(numbers[1]);
  const divisor = (first, second) => {
    if (second === 0) {
      return first;
    }
    return divisor(second, first % second);
  };
  return String(divisor(firstNum, secondNum));
};
