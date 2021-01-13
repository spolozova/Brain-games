import getRandomNumber from '../utils.js';
import runGames from '../index.js';

const RULE = 'What number is missing in the progression?';

const START_MINIMUM = 1;
const START_MAXIMUM = 50;
const LENGTH_MINIMUM = 5;
const LENGTH_MAXIMUM = 10;
const STEP_MINIMUM = 1;
const STEP_MAXIMUM = 50;

const generateProgression = (length, start, step) => {
  const progression = [];
  let number = start;
  while (progression.length < length) {
    progression.push(number);
    number += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(LENGTH_MINIMUM, LENGTH_MAXIMUM);
  const start = getRandomNumber(START_MINIMUM, START_MAXIMUM);
  const step = getRandomNumber(STEP_MINIMUM, STEP_MAXIMUM);
  const hiddenNumber = getRandomNumber(0, length - 1);
  const progression = generateProgression(length, start, step);
  const answer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  runGames(RULE, getQuestionAndAnswer);
};
