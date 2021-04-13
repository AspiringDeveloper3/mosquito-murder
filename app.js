const startBtn = document.querySelector("button");
const startText = document.querySelector("h2.start-text");
const timer = document.querySelector("h3.timer");
const infoDiv = document.querySelector("div.info");
const score = document.querySelector("h3.score>b");

timer.style.display = `none`;
infoDiv.style.display = `none`;

startBtn.addEventListener("click", (e) => {
  const makeMosquito = () => {
    const mosquito = document.createElement("img");
    mosquito.src = `./img/mosquito.png`;
    mosquito.style.position = `absolute`;
    mosquito.style.top = `${Math.floor(
      Math.random() * window.innerHeight + 100
    )}px`;
    mosquito.style.left = `${Math.floor(
      Math.random() * window.innerWidth - 200
    )}px`;
    mosquito.classList.add("image");

    mosquito.addEventListener("click", () => {
      score.innerHTML = parseInt(score.innerHTML) + 1;
      mosquito.style.display = `none`;
    });
    document.querySelector("div.mosquitoes").appendChild(mosquito);
  };
  startBtn.style.display = `none`;
  infoDiv.style.display = `flex`;

  startText.innerHTML = `3`;
  setTimeout(() => {
    startText.innerHTML = `2`;
  }, 1000);
  setTimeout(() => (startText.innerHTML = `1`), 2000);
  setTimeout(() => (startText.innerHTML = `Begin!`), 3000);
  setTimeout(() => {
    startText.innerHTML = ``;
    timer.style.display = `flex`;
  }, 3500);
  setTimeout(() => {
    setInterval(() => {
      timer.innerHTML = parseInt(timer.innerHTML) - 1;
      if (parseInt(timer.innerHTML) === 0) {
        document.querySelector("body").children = [];
        document.querySelector("body").style.display = `none`;
        alert("Game ended!\nYour score is " + score.innerHTML);
        console.log();
      }
    }, 1000);
    setInterval(() => {
      makeMosquito();
    }, 600);
  }, 4000);
});
