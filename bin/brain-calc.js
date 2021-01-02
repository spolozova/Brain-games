#!/usr/bin/env node
import theGame from '../scr/index.js';
import calculator, { rightAnswer, rule } from '../games/gameCalc.js';

console.log('Welcome to the Brain Games!');
theGame(rightAnswer, calculator, rule);
