// render-contests.js
// Dhyaan rahe: isse pehle contests-config.js load hona chahiye

function renderContestCards(containerId, contests) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(contests)) return;

  container.innerHTML = "";

  contests.forEach((c) => {
    const card = document.createElement("div");

    // Gradient + layout (apne design ke hisaab se classes tweak kar sakte ho)
    card.className =
      "rounded-2xl p-5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 " +
      "text-white flex flex-col justify-between shadow-xl";

    card.innerHTML = `
      <div>
        <div class="text-xs uppercase tracking-wide opacity-90">
          ${c.cardTag || ""}
        </div>
        <h3 class="mt-1 text-xl font-semibold">
          ${c.cardTitle || c.title}
        </h3>
        <p class="mt-1 text-sm opacity-90">
          ${c.cardSubtitle || ""}
        </p>

        <div class="mt-4">
          <div class="text-[11px] uppercase opacity-80">Win prize</div>
          <div class="text-3xl font-bold leading-tight">
            ${c.cardPrizeText || `Win ₹${c.totalPrize}`}
          </div>
          <p class="mt-1 text-xs opacity-90">
            ${c.cardHighlight || ""}
          </p>
        </div>
      </div>

      <div class="mt-5 flex items-center justify-between">
        <div class="text-sm">
          Entry
          <span class="font-semibold">
            ${c.entryFee === 0 ? "Free" : "₹" + c.entryFee}
          </span>
        </div>
        <a
          href="${c.cardRoute}"
          class="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold
                 hover:bg-slate-100 transition"
        >
          ${c.entryFee === 0 ? "Register now" : "Join for ₹" + c.entryFee}
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// global expose
window.renderContestCards = renderContestCards;
