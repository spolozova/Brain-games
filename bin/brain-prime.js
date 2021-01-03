#!/usr/bin/env node
import theGame from '../scr/index.js';
import getRandomNumber from '../games/gameEven.js';
import rightAnswer, { rule } from '../games/gamePrime.js';

console.log('Welcome to the Brain Games!');
theGame(rightAnswer, getRandomNumber, rule);
