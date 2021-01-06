#!/usr/bin/env node
import runGames from '../src/index.js';
import biggestNumber, { rightAnswer, RULE } from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');
runGames(rightAnswer, biggestNumber, RULE);
