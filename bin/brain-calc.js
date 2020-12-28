#!/usr/bin/env node
import theGame from '../scr/common-functions.js';
import calculator, { rightAnswer, rule } from '../scr/gameCalc.js';

console.log('Welcome to the Brain Games!');
theGame(rightAnswer, calculator, rule);
