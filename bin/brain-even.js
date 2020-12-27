#!/usr/bin/env node
import getRandomNumber, { rightAnswer, rule } from '../scr/gameEven.js';
import theGame from '../scr/common-functions.js';

console.log('Welcome to the Brain Games!');

theGame(rightAnswer, getRandomNumber, rule);
