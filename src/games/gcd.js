import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import runGames from '../index.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const pair = cons(firstNumber, secondNumber);
  const question = `${car(pair)} ${cdr(pair)}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  return [question, answer];
};

const runGcd = () => {
  runGames(RULE, getQuestionAndAnswer);
};

export default runGcd;
