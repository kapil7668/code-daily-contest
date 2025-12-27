// contests-config.js

// ---------- CORE CONTEST CONFIG ----------

const CONTESTS = [
  // ---------- FREE CONTESTS ----------

  {
    id: "free-200",
    type: "free",
    title: "Free Starter Contest",
    entryFee: 0,
    minParticipants: 200,
    totalPrize: 1000,
    maxWinners: 1,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 1000 }
    ],

    // ---- Card UI fields ----
    cardTitle: "Free Starter Contest",
    cardSubtitle: "Beginner friendly • 1 winner",
    cardPrizeText: "Win ₹1,000",
    cardTag: "FREE CONTEST",
    cardHighlight: "Join anytime • Great for testing the platform",
    cardRoute: "contest.html?type=free&id=free-200"
  },

  {
    id: "free-500",
    type: "free",
    title: "Free Mega Contest",
    entryFee: 0,
    minParticipants: 500,
    totalPrize: 2500,
    maxWinners: 1,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 2500 }
    ],

    cardTitle: "Free Mega Contest",
    cardSubtitle: "Big free contest • 1 winner",
    cardPrizeText: "Win ₹2,500",
    cardTag: "FREE CONTEST",
    cardHighlight: "Zero entry fee • Perfect for all users",
    cardRoute: "contest.html?type=free&id=free-500"
  },

  // ---------- PAID CONTESTS ----------

  // ₹9 contest – Top 10
  {
    id: "paid-9",
    type: "paid",
    title: "₹9 Quick Rush",
    entryFee: 9,
    minParticipants: 110,
    totalPrize: 590,
    maxWinners: 10,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 300 },
      { fromRank: 2, toRank: 2, amount: 100 },
      { fromRank: 3, toRank: 3, amount: 50 },
      { fromRank: 4, toRank: 10, amount: 20 }
    ],

    cardTitle: "₹9 Quick Rush",
    cardSubtitle: "45 mins sprint • Top 10 paid",
    cardPrizeText: "Win ₹590",
    cardTag: "PAID CONTEST",
    cardHighlight: "Instant start • Results after min entries",
    cardRoute: "contest.html?type=paid&amount=9&variant=top10"
  },

  // ₹49 contest – Top 10
  {
    id: "paid-49",
    type: "paid",
    title: "₹49 Pro Rush",
    entryFee: 49,
    minParticipants: 125,
    totalPrize: 3650,
    maxWinners: 10,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 1500 },
      { fromRank: 2, toRank: 2, amount: 700 },
      { fromRank: 3, toRank: 3, amount: 400 },
      { fromRank: 4, toRank: 10, amount: 150 }
    ],

    cardTitle: "₹49 Pro Rush",
    cardSubtitle: "Medium–Hard set • Top 10 paid",
    cardPrizeText: "Win ₹3,650",
    cardTag: "PAID CONTEST",
    cardHighlight: "Anytime join • Better payouts",
    cardRoute: "contest.html?type=paid&amount=49&variant=top10"
  },

  // ₹99 contest – Top 10 (normal)
  {
    id: "paid-99",
    type: "paid",
    title: "₹99 Advanced Contest",
    entryFee: 99,
    minParticipants: 125,
    totalPrize: 7400,
    maxWinners: 10,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 3000 },
      { fromRank: 2, toRank: 2, amount: 1500 },
      { fromRank: 3, toRank: 3, amount: 800 },
      { fromRank: 4, toRank: 10, amount: 300 }
    ],

    cardTitle: "₹99 Advanced Contest",
    cardSubtitle: "Medium–Hard DSA • Top 10 paid",
    cardPrizeText: "Win ₹7,400",
    cardTag: "PAID CONTEST",
    cardHighlight: "Join anytime • High‑value prizes",
    cardRoute: "contest.html?type=paid&amount=99&variant=top10"
  },

  // ₹149 contest – Top 20
  {
    id: "paid-149",
    type: "paid",
    title: "₹149 Elite Contest",
    entryFee: 149,
    minParticipants: 150,
    totalPrize: 13300,
    maxWinners: 20,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 4000 },
      { fromRank: 2, toRank: 2, amount: 2500 },
      { fromRank: 3, toRank: 3, amount: 1500 },
      { fromRank: 4, toRank: 10, amount: 400 },
      { fromRank: 11, toRank: 20, amount: 250 }
    ],

    cardTitle: "₹149 Elite Contest",
    cardSubtitle: "Advanced DSA • Top 20 paid",
    cardPrizeText: "Win ₹13,300",
    cardTag: "ELITE CONTEST",
    cardHighlight: "High stakes • Wider payouts",
    cardRoute: "contest.html?type=paid&amount=149&variant=top20"
  },

  // ₹199 contest – Top 20
  {
    id: "paid-199",
    type: "paid",
    title: "₹199 Champion Contest",
    entryFee: 199,
    minParticipants: 160,
    totalPrize: 18700,
    maxWinners: 20,
    payouts: [
      { fromRank: 1, toRank: 1, amount: 6000 },
      { fromRank: 2, toRank: 2, amount: 3500 },
      { fromRank: 3, toRank: 3, amount: 2000 },
      { fromRank: 4, toRank: 10, amount: 600 },
      { fromRank: 11, toRank: 20, amount: 300 }
    ],

    cardTitle: "₹199 Champion Contest",
    cardSubtitle: "Serious players • Top 20 paid",
    cardPrizeText: "Win ₹18,700",
    cardTag: "ELITE CONTEST",
    cardHighlight: "Big prize pool • Competitive field",
    cardRoute: "contest.html?type=paid&amount=199&variant=top20"
  },

  // BIG ₹99 contest – Top 100
  {
    id: "paid-99-top100",
    type: "paid",
    title: "₹99 Grand League (Top 100)",
    entryFee: 99,
    minParticipants: 500,
    totalPrize: 29900,
    maxWinners: 100,
    payouts: [
      { fromRank: 1,  toRank: 1,   amount: 5000 },
      { fromRank: 2,  toRank: 2,   amount: 3000 },
      { fromRank: 3,  toRank: 3,   amount: 2000 },
      { fromRank: 4,  toRank: 10,  amount: 800 },
      { fromRank: 11, toRank: 20,  amount: 450 },
      { fromRank: 21, toRank: 50,  amount: 260 },
      { fromRank: 51, toRank: 100, amount: 100 }
    ],

    cardTitle: "₹99 Grand League",
    cardSubtitle: "Top 100 win prizes",
    cardPrizeText: "Win ₹29,900",
    cardTag: "GRAND LEAGUE",
    cardHighlight: "Massive field • Rewards up to rank 100",
    cardRoute: "contest.html?type=paid&amount=99&variant=top100"
  }
];

// ---------- ENTRY MAPPINGS (EXISTING LOGIC) ----------

const ENTRY_CONFIG = {
  9:   CONTESTS.find(c => c.id === "paid-9"),
  49:  CONTESTS.find(c => c.id === "paid-49"),
  99:  CONTESTS.find(c => c.id === "paid-99"),
  149: CONTESTS.find(c => c.id === "paid-149"),
  199: CONTESTS.find(c => c.id === "paid-199"),
};

const ENTRY_CONFIG_99_TOP10  = CONTESTS.find(c => c.id === "paid-99");
const ENTRY_CONFIG_99_TOP100 = CONTESTS.find(c => c.id === "paid-99-top100");

// ---------- HELPERS FOR HOMEPAGE / DASHBOARD ----------

function getFeaturedContests() {
  // Homepage / Explore ke top section ke liye
  return CONTESTS.filter(c =>
    ["free-200", "free-500", "paid-9", "paid-99"].includes(c.id)
  );
}

function getActiveContests() {
  // Abhi ke liye sabhi; baad me status field ke basis par filter kar sakte ho
  return CONTESTS;
}

// ---------- GLOBAL EXPORTS (VANILLA JS) ----------

window.CONTESTS = CONTESTS;
window.getFeaturedContests = getFeaturedContests;
window.getActiveContests = getActiveContests;
window.ENTRY_CONFIG = ENTRY_CONFIG;
window.ENTRY_CONFIG_99_TOP10 = ENTRY_CONFIG_99_TOP10;
window.ENTRY_CONFIG_99_TOP100 = ENTRY_CONFIG_99_TOP100;
