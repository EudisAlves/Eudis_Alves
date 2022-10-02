const secondsHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hoursHand = document.querySelector(".hand.hours"); // para selecionar a maesma palavra mais de uma ves precionamos ctrl+D

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClok = () => {
  const currentData = new Date();

  const secondsPercentage = currentData.getSeconds() / 60;
  const minutesPercentaga = (secondsPercentage + currentData.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentaga + currentData.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentaga);
  setRotation(hoursHand, hoursPercentage);
};

setClok();

setInterval(setClok, 1000);
