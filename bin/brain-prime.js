#!/usr/bin/env node
import runGames from '../src/index.js';
import getRandomNumber from '../src/utils.js';
import rightAnswer, { RULE } from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
runGames(rightAnswer, getRandomNumber, RULE);
