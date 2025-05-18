const btn = document.querySelector(".btn");
const colseIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

colseIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
