const mario = document.querySelector('.mario')

const jump = () => {
    mario.classList.add('jump');

    setTimeout((event) => {
        if (event.key == "ArrowUp") {
            mario.classList.remove('jump')
        }
    }, 900) 
}
document.addEventListener('keydown', jump)               