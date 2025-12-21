// contests-config.js

const CONTESTS = [
  // FREE CONTESTS
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

  // ₹9 PAID CONTEST
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
  }
];
