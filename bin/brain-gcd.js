#!/usr/bin/env node
import theGame from '../scr/index.js';
import biggestNumber, { rightAnswer, rule } from '../games/gameGcd.js';

console.log('Welcome to the Brain Games!');
theGame(rightAnswer, biggestNumber, rule);
