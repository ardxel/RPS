var historyData = [];

export function start() {
    let panel = document.getElementById('button-panel');
    let openButtons = document.querySelectorAll('.open-button');
    //close start buttons
    for (let button of openButtons) {
        button.style.display = 'none';
    }
    //create game buttons if they don't exist
    if (!panel.querySelector('.game-input')) {
        createPlayButtons();
    } else {
        for (let gameButton of panel.querySelectorAll('.game-input')) {
            gameButton.style.display = '';
        }
    }
    hideMessages();
}


function createPlayButtons() {
    for (let i = 1; i <= 3; i++) {

        let input = document.createElement('input');
        input.type = 'button';
        input.className = 'game-input'

        switch (i) {
            case 1: input.value = 'rock';
                break;
            case 2: input.value = 'scissors';
                break;
            case 3: input.value = 'paper';
                break;
        }

        input.addEventListener('click', function () {
            const answerAI = generator();
            const answer = input.value;

            whoHasWon(answer, answerAI);

            for (let button of document.querySelectorAll('.game-input')) {
                button.style.display = 'none';
            }
            for (let openButton of document.querySelectorAll('.open-button')) {
                openButton.style.display = '';
            }
        })
        let panel = document.getElementById('button-panel');
        panel.append(input);
    }

}

function hideMessages() {
    const panel = document.getElementById('board-event');

    for (let elem of panel.children) {
        elem.style.display = 'none';
    }

}

function generator() {
    const obj = {
        1: 'rock',
        2: 'scissors',
        3: 'paper'
    }

    const randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    return obj[randomNum];
}

function whoHasWon(p1, p2) {
    const rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' }
    let result;

    if (p1 == p2) {
        result = 'Draw'
        showDraw();
    }

    else if (p2 == rules[p1]) {
        result = 'player-human';
        winner('player-human');
    } else {
        result = 'player-AI';
        winner('player-AI');
    }

    addLiElement(p1, p2, result, new Date());
}

function showDraw() {
    const board = document.getElementById('board-event');
    let drawMessage = document.querySelector('.draw');

    if (drawMessage) {
        hideMessages();
        drawMessage.style.display = '';
    } else {

        drawMessage = document.createElement('span');
        drawMessage.className = 'draw';
        drawMessage.innerHTML = 'Произошла ничья';

        board.append(drawMessage);
    }
}

function winner(player) {
    const score = document.getElementById(player);
    score.innerHTML++;
    let winnerName = `.winner-${player}`;

    let showWinner = document.querySelector(winnerName);

    if (!showWinner) {
        let spanWin = document.createElement('span');
        spanWin.className = winnerName.slice(1);
        spanWin.innerHTML = `Победил ${player}`;

        hideMessages();
        document.getElementById('board-event').append(spanWin);
    } else {
        hideMessages();
        showWinner.style.display = '';
    }
}

// restart event

export function restart() {

    hideMessages();

    document.querySelectorAll('.score').forEach(score => {
        score.innerHTML = 0;
    })
    document.querySelector('.start-message').style.display = '';
}


// history event
const historyMain = document.querySelector('#main-history');
export function history() { }

function addLiElement(answer1, answer2, result, date) {
    const answers = `you: ${answer1}, AI: ${answer2}`;
    const verdict = (result) => {
        if (result == 'Draw') {
            return 'Draw';
        } else return `winner: ${result}`;
    };
    const eventDate = strDate(date);

    let li = document.createElement('li');
    li.innerHTML = `${answers}, ${verdict(result)} [${eventDate}]`;
    historyMain.firstElementChild.prepend(li);
}


function strDate(date) {
    let year = String(date.getFullYear()).slice(2);
    let mon = date.getMonth() + 1;
    let days = date.getDate();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    return `${h}:${m}:${s} ${days}:${mon}:${year}`;
}