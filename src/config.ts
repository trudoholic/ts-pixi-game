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
    { name: "Discard", lim: -1 },
    { name: "Destroy", lim: -1 },
  ],

};

export default config;
