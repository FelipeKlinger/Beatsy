const playButton = document.getElementById("play-button");
const musicBars = document.getElementById("music-bars");

playButton.addEventListener("click", () => {
  musicBars.classList.toggle("active");

});