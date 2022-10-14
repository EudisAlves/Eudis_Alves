const mario = document.querySelector(" .mario");
const pipe = document.querySelector(" .pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 900);
};

const loop = setTimeout(() => {
  const pipeposition = pipe.offsetleft;
  if (pipeposition <= 120) {
    pipe.style.animation = "none;";
    pipe.style.left = `${pipeposition}px`;
  }
});

document.addEventListener("keydown", jump);
