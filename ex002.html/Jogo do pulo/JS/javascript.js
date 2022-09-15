const mario = document.querySelector('.mario');
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".score");
let aleardyjump = false;
let count = 0;

document.addEventListener('keydown', (e)=>{
    if((e.code ==="ArrowUp")|(e.code ==="Space")){
        jump();
    }
    function jump(){
        if(!mario.classList.contains("jump")){
            mario.classList.add("jump");
            aleardyjump = true;
        setTimeout(() =>{
            mario.classList.remove("jump");
            aleardyjump = false;
        }, 900);
        }
    }
    setInterval(() =>{
        let marioBottom = parseInt(
            window.getComputedStyle(mario).getPropertyValue("bottom"));
        let pipeLeft = parseInt(
            !alreadyjump){
                alert(`Gmae Over! Seu score foi: ${count}`);
                count = 0;
            }    
         count++;
            score.innerHTML = `SCORE: ${COUNT}`;
}, 40);              