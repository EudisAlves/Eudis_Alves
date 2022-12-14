const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login__form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handlerSubmit = (event) => {
    event.preventDeflaut();

    localStorage.setItem('player', input.value);/*aqui iremos salvar as informações
     no navegador pessoal*/
    window.location = 'pages/game.html';/*para trocar para pagina do jogo */
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handlerSubmit);
