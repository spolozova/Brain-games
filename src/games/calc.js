import _ from 'lodash';
import randomNumber from '../utils.js';

export const RULE = 'What is the result of the expression?';
const calculator = () => {
  const ranNum1 = randomNumber();
  const ranNum2 = randomNumber();
  const operator = _.sample(['+', '-', '*']);
  return `${ranNum1} ${operator} ${ranNum2}`;
};
export const rightAnswer = (str) => {
  const separator = ' ';
  let answer = 0;
  const arr = str.split(separator);
  if (arr[1] === '+') {
    answer = Number(arr[0]) + Number(arr[2]);
  } else if ((arr[1]) === '-') {
    answer = Number(arr[0]) - Number(arr[2]);
  } else {
    answer = Number(arr[0]) * Number(arr[2]);
  }
  return String(answer);
};
export default calculator;
