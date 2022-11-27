
export function start() {
    let panel = document.getElementById('button-panel');
    let buttons = document.querySelectorAll('.open-button');

    for (let button of buttons) {
        button.style.display = 'none';
    }

    for (let i = 1; i <= 3; i++) {
        let input = document.createElement('input');
        input.type = 'button';
        input.className = 'game-input'
    
        switch(i) {
            case 1: input.value = 'rock';
                break;
            case 2: input.value = 'scissors';
                break;
            case 3: input.value = 'paper';
                break;
        }
        
        input.addEventListener('click', function() {
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

        panel.append(input);
    }

    let startMessage = document.querySelector('.start-message');
    startMessage.style.display = 'none';

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
    if (p1 == p2) return showDraw();

    const rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'}
    //first player won
    if (p2 == rules[p1]) {
        
    }
    //computer won
    else {

    }
}

function showDraw() {
    const board  = document.getElementById('board-event');
    
    if (board.childNodes.length) {
        board.innerHTML = '';
    }

    const drawMessage = document.createElement('span');
    drawMessage.className = 'draw';
    drawMessage.innerHTML = 'Произошла ничья';

    board.append(drawMessage);
}

