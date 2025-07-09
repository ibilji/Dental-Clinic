const slider = document.getElementById("ba-slider");
const afterImg = document.getElementById("after-img");
const handle = document.getElementById("slider-handle");

let isDragging = false;

slider.addEventListener("mousedown", () => {
  isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = slider.getBoundingClientRect();
  let x = e.clientX - rect.left;

  if (x < 0) x = 0;
  if (x > rect.width) x = rect.width;

  const percentage = (x / rect.width) * 100;

  afterImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  handle.style.left = `${percentage}%`;
});
