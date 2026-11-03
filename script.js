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
