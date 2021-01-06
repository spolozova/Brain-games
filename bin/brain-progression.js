#!/usr/bin/env node
import runGames from '../src/index.js';
import getProgression, { rightAnswer, RULE } from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');
runGames(rightAnswer, getProgression, RULE);
