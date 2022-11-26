
export function start() {

    let buttons = document.querySelectorAll('input[type=button]');
    for (let button of buttons) {
        button.style.display = 'none';
    }
    let panel = document.getElementById('button-panel');

    for (let i = 1; i <= 3; i++) {
        let input = document.createElement('input');
        if (i == 1) input.value = 'камень';
        if (i == 2) input.value = 'ножницы';
        if (i == 3) input.value = 'бумага';

        input.type = 'button';
        
        panel.append(input);
    }

    let startMessage = document.querySelector('.start-message');
    startMessage.remove();
}