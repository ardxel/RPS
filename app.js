import { start } from './script.js'
import { restart } from './script.js'
import { history } from './script.js'

const startButton = document.querySelector('input[value=start]');
const restartButton = document.querySelector('input[value=restart]');
const historyButton = document.querySelector('input[value=history]');

startButton.addEventListener('click', start);
restartButton.addEventListener('click', restart);
historyButton.addEventListener('click', history);

