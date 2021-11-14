const config = {

  players: [
    { name: "North" },
    { name: "East"  },
    { name: "South" },
    { name: "West"  },
  ],

  cards: 56,
  cards_deal: 5,

  phases: [
    { name: "Draw", lim: 2 },
    { name: "Play", lim: 1 },
    { name: "Hand", lim: -1 },
    { name: "Keep", lim: -1 },
  ],

  zones: [
    { name: "Hand" },
    { name: "Keep" },
    { name: "Crib" },
  ],

};

export default config;
