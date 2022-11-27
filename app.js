import { start } from './script.js'
import { restart } from './script.js'

const startButton = document.querySelector('input[value=start]');
const restartButton = document.querySelector('input[value=restart');

startButton.addEventListener('click', start);
restartButton.addEventListener('click', restart);
