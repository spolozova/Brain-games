import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from '../utils.js';
import runGames from '../index.js';

const runGameGcd = () => {
  const RULE = 'Find the greatest common divisor of given numbers.';

  const getRightAnswer = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
      return firstNumber;
    }
    return getRightAnswer(secondNumber, firstNumber % secondNumber);
  };

  const getQuestionAndAnswer = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const pair = cons(firstNumber, secondNumber);
    const question = `${car(pair)} ${cdr(pair)}`;
    const answer = String(getRightAnswer(firstNumber, secondNumber));
    return [question, answer];
  };
  runGames(RULE, getQuestionAndAnswer);
};

export default runGameGcd;
