import _ from 'lodash';
import { cons, car, cdr } from '@hexlet/pairs';
import randomNumber from '../utils.js';

export const RULE = 'What is the result of the expression?';
const calculator = () => {
  const pair = cons(randomNumber(), randomNumber());
  const operator = _.sample(['+', '-', '*']);
  return `${car(pair)} ${operator} ${cdr(pair)}`;
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
