const moods = [
  "🏃 Runner Anthony — just got back from a 5-miler",
  "✈️ Travel Anthony — planning the next trip already",
  "💻 CS Anthony — deep in a debugging session",
  "🏙️ Boston Anthony — exploring a new neighborhood",
  "🏔️ Outdoors Anthony — needs to be outside today",
];

function getRandomMood(currentIndex) {
  let nextIndex = Math.floor(Math.random() * moods.length);
  // avoid repeating the same mood twice in a row
  while (nextIndex === currentIndex && moods.length > 1) {
    nextIndex = Math.floor(Math.random() * moods.length);
  }
  return nextIndex;
}

function initMoodPicker() {
  const button = document.getElementById("mood-btn");
  const output = document.getElementById("mood-output");
  let lastIndex = -1;

  if (!button || !output) return;

  button.addEventListener("click", () => {
    lastIndex = getRandomMood(lastIndex);
    output.textContent = moods[lastIndex];
  });
}

document.addEventListener("DOMContentLoaded", initMoodPicker);
