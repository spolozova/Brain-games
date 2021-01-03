#!/usr/bin/env node
import theGame from '../scr/index.js';
import getProgression, { rightAnswer, rule } from '../games/gameProgression.js';

console.log('Welcome to the Brain Games!');
theGame(rightAnswer, getProgression, rule);
