import _ from 'lodash';
import { cons, car, cdr } from '@hexlet/pairs';
import randomNumber from '../utils.js';
import runGame from '../index.js';

const runGameCalculator = () => {
  const RULE = 'What is the result of the expression?';

  const getRightAnswer = (operator, number1, number2) => {
    if (operator === '+') {
      return number1 + number2;
    }
    if (operator === '-') {
      return number1 - number2;
    }
    return number1 * number2;
  };

  const getQuestionAndAnswer = () => {
    const number1 = randomNumber();
    const number2 = randomNumber();
    const pair = cons(number1, number2);
    const operator = _.sample(['+', '-', '*']);
    const question = `${car(pair)} ${operator} ${cdr(pair)}`;
    const answer = String(getRightAnswer(operator, number1, number2));
    return [question, answer];
  };

  runGame(RULE, getQuestionAndAnswer);
};

export default runGameCalculator;
