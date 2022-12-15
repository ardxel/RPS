import { start } from './functions.js'
import { restart } from './functions.js'
import { history } from './functions.js'
import {style} from './style.css'

const startButton = document.querySelector('input[value=start]');
const restartButton = document.querySelector('input[value=restart]');
const historyButton = document.querySelector('input[value=history]');

startButton.addEventListener('click', start);
restartButton.addEventListener('click', restart);
historyButton.addEventListener('click', history);

