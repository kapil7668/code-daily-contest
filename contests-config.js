// contests-config.js

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

// Normal mapping (9,49,99,149,199)
const ENTRY_CONFIG = {
  9:   CONTESTS.find(c => c.id === "paid-9"),
  49:  CONTESTS.find(c => c.id === "paid-49"),
  99:  CONTESTS.find(c => c.id === "paid-99"),
  149: CONTESTS.find(c => c.id === "paid-149"),
  199: CONTESTS.find(c => c.id === "paid-199"),
};

// Extra configs for 99 Top‑100
const ENTRY_CONFIG_99_TOP10  = CONTESTS.find(c => c.id === "paid-99");
const ENTRY_CONFIG_99_TOP100 = CONTESTS.find(c => c.id === "paid-99-top100");
