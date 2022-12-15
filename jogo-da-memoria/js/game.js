const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [/*todas as imagens dos personagens */
    
/*aki nessa lista so criará uma carta de cada*/

    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
];

/*função para criar as cartas*/

const createElement = (tag, className) => {/**criar um elemento por
tag e nome so elemento*/
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';/*aki vamos guardar a primeira carta a ser virada */
let secondCard = '';/*aki a segunda carta*/

const checkEndGame = () => {

    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20) {
        alert('Parabéns, você conseguiu!!!');
    }
}


const checkCards = () => {/*função de checar as cartas */
    
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {
        /*aki iremos verificar o acerto e tbm tirar a carta de foco 
        para não atrapalhar */
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        /*reste de jogada */
        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {

        setTimeout(() => {/*aki a carta será coloccada de costas novamente
        caso seja diferente depois de um tempo */
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
        /*aki vamos resetar a jogada*/
            firstCard = '';
            secondCard = '';
        }, 1000);
    }
}

/*funação de virar a carta */

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;/*aki é para verificar e a carta ja foi virada na seguencia*/
    }

    if (firstCard == '') {/*aki é pra revelar a primeira carta */

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == '') {/*aki a segunda carta */
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}



const createCard = (character) => {
    const card = createElement('div', "card");/*cirar a carta*/
    const front = createElement('div', 'face front');/*criar a frente da carta*/
    const back = createElement('div', 'face back');/*criar o verso da carta*/

/*código para colocar as imagens nas frente das cartas
de forma automática e dirteto da pagina img*/
    front.style.backgroundImage = `url('../img/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    /*colocar a função click na carta */
    card.addEventListener('click', revealCard);
    /*aki atribuiremos de maira dinamica as classes para cada carta
    para poder comparar um a outra para dar andamento ao jogo*/
    card.setAttribute('data-character', character)
    return card;
}

/*Código para carregar as imagens ao abrir a tela */

const loadGame = () => {
    /*função para dulpicar as cartas*/
    const duplicateCharacters = [...characters, ...characters];
    /*fubção para colocar as cartas aleatórias*/
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);/*colocar as cartas na tela*/
    });
}

window.onload = () => {
    
    loadGame();
}


