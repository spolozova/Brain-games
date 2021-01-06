#!/usr/bin/env node
import getRandomNumber from '../src/utils.js';
import rightAnswer, { RULE } from '../src/games/even.js';
import runGames from '../src/index.js';

console.log('Welcome to the Brain Games!');

runGames(rightAnswer, getRandomNumber, RULE);
