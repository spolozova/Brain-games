import _ from 'lodash';
import { evaluate } from 'mathjs';
import randomNumber from './gameEven.js';

export const rule = 'What is the result of the expression?';
const calculator = () => {
  const ranNum1 = randomNumber();
  const ranNum2 = randomNumber();
  const operator = _.sample(['+', '-', '*']);
  return `${ranNum1} ${operator} ${ranNum2}`;
};
export const rightAnswer = (str) => String(evaluate(str));
export default calculator;
