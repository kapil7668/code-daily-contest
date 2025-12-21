function renderContestCards() {
  const container = document.getElementById("contests-container");
  if (!container || !Array.isArray(CONTESTS)) return;

  container.innerHTML = "";

  const free = CONTESTS.filter(c => c.type === "free");
  const paid = CONTESTS
    .filter(c => c.type === "paid")
    .sort((a, b) => a.entryFee - b.entryFee);

  const ordered = [...free, ...paid];

  ordered.forEach(c => {
    const card = document.createElement("div");
    card.className = "contest-card";

    const entryText = c.entryFee === 0 ? "Free entry" : `Entry ₹${c.entryFee}`;
    const prizeLine = `Total prize ₹${c.totalPrize} • Top ${c.maxWinners}`;
    let payoutLine = "";

    if (c.id === "paid-9") {
      payoutLine = "1st ₹300, 2nd ₹100, 3rd ₹50, 4–10 ₹20";
    } else if (c.type === "free") {
      payoutLine = `Winner gets ₹${c.totalPrize}`;
    }

    card.innerHTML = `
      <h3>${c.title}</h3>
      <p>${entryText}</p>
      <p>Min ${c.minParticipants} players</p>
      <p>${prizeLine}</p>
      <p>${payoutLine}</p>
      <button class="btn-cta" data-id="${c.id}">
        Join (coming soon)
      </button>
    `;

    container.appendChild(card);
  });

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (!btn) return;
    const id = btn.getAttribute("data-id");
    alert("Contest flow coming soon: " + id);
  });
}

document.addEventListener("DOMContentLoaded", renderContestCards);
