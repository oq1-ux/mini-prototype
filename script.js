const friendsBtn = document.getElementById("friends-btn");
const friendsPanel = document.getElementById("friends-panel");
const friendsMsg = document.getElementById("friends-msg");

// Toggle the friends panel open and closed
friendsBtn.addEventListener("click", () => {
  friendsPanel.hidden = !friendsPanel.hidden;
  friendsBtn.textContent = friendsPanel.hidden
    ? "👥 Friends (3 active today)"
    : "✕ Hide Friends";
});

// Send a cheer to a friend
document.querySelectorAll(".cheer").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    btn.textContent = "✅";
    btn.disabled = true;
    friendsMsg.textContent = `You cheered on ${name}!`;
  });
});

const batteryInput = document.getElementById("battery-input");
const sleepInput = document.getElementById("sleep-input");
const batteryValue = document.getElementById("battery-value");
const sleepValue = document.getElementById("sleep-value");
const suggestBtn = document.getElementById("suggest-btn");
const suggestion = document.getElementById("suggestion");

// Keep the numbers next to the sliders up to date
batteryInput.addEventListener("input", () => {
  batteryValue.textContent = batteryInput.value;
});
sleepInput.addEventListener("input", () => {
  sleepValue.textContent = sleepInput.value;
});

// Recommend a hard workout, easy workout, or rest
function getRecommendation(battery, sleep) {
  if (battery < 35 || sleep < 50) {
    return { type: "rest", title: "🛌 Rest Day", text: "Your body needs to recover. Try stretching or a short walk." };
  }
  if (battery >= 70 && sleep >= 75) {
    return { type: "hard", title: "🔥 Hard Workout", text: "You're well rested. Go for intervals, a long run, or heavy lifting." };
  }
  return { type: "easy", title: "🚶 Easy Workout", text: "Keep it light today. An easy jog, bike ride, or yoga is perfect." };
}

suggestBtn.addEventListener("click", () => {
  const rec = getRecommendation(Number(batteryInput.value), Number(sleepInput.value));
  suggestion.className = `suggestion ${rec.type}`;
  suggestion.innerHTML = `<strong>${rec.title}</strong><p>${rec.text}</p>`;
  suggestion.hidden = false;
});
