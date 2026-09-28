const moods = [
  "🏃 Run a Marathon",
  "✈️ Backpack Africa for a 55 day tour",
  "💻 Design a Travel App",
  "🏙️ Move to New York City",
  "🏔️ Get Casted on Survivor",
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
