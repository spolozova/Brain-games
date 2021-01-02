#!/usr/bin/env node
import getRandomNumber, { rightAnswer, rule } from '../games/gameEven.js';
import theGame from '../scr/index.js';

console.log('Welcome to the Brain Games!');

theGame(rightAnswer, getRandomNumber, rule);
