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

    // Attractive card styling
    card.className =
      "bg-slate-800/80 border rounded-xl px-5 py-4 flex items-center justify-between " +
      "shadow-[0_0_25px_rgba(15,23,42,0.85)] " +
      "transition hover:border-emerald-400/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] " +
      "text-sm " +
      (c.type === "free" ? "border-emerald-400/40" : "border-amber-400/40");

    const entryText = c.entryFee === 0 ? "Free test" : `Entry ₹${c.entryFee}`;
    const prizeLine = `Total prize ₹${c.totalPrize} • Top ${c.maxWinners}`;
    let payoutLine = "";

    if (c.id === "paid-9") {
      payoutLine = "1st ₹300, 2nd ₹100, 3rd ₹50, 4–10 ₹20";
    } else if (c.type === "free") {
      payoutLine = `Winner gets ₹${c.totalPrize}`;
    }

    card.innerHTML = `
      <div>
        <p class="text-[11px] uppercase tracking-wide ${
          c.type === "free" ? "text-emerald-400" : "text-amber-400"
        } mb-1">
          ${c.type === "free" ? "Free contest" : "Paid contest"}
        </p>

        <p class="font-semibold text-base mb-1">${c.title}</p>

        <p class="text-slate-300 text-xs mb-1">
          ${entryText} • Min ${c.minParticipants} students
        </p>

        <p class="text-slate-400 text-[11px]">
          ${prizeLine}
        </p>

        <p class="text-slate-500 text-[11px]">
          ${payoutLine}
        </p>
      </div>

      <button
        class="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-xs font-semibold"
        data-id="${c.id}">
        Join test
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
