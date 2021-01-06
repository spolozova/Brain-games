#!/usr/bin/env node
import runGames from '../src/index.js';
import calculator, { rightAnswer, RULE } from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
runGames(rightAnswer, calculator, RULE);
