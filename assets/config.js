// assets/config.js

// Tiers configurate (capital minim și procent de profit lunar brut)
const VAULTX_TIERS = [
  { capital: 100,   pct: 0.40 },
  { capital: 250,   pct: 0.35 },
  { capital: 500,   pct: 0.30 },
  { capital: 1000,  pct: 0.25 },
  { capital: 2500,  pct: 0.20 },
  { capital: 5000,  pct: 0.15 },
  { capital: 10000, pct: 0.10 }
];

// Setări pentru VaultX Elite
const ELITE_PRICE = 100;               // preț lunar în USDT
const ELITE_RAFFLE_PRIZE_USDT = 200;   // premiu zilnic în USDT
const ELITE_RAFFLE_PER_MEMBERS = 120;  // câți membri activi pe premiu

// Text legal global
const LEGAL_BANNER = "© VaultX Investment Club. All rights reserved. Unauthorized use or reproduction is strictly prohibited.";